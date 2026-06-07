const fs = require('fs');
const path = require('path');

const folders = ['ECO Topic Drilling', 'Process Group Drilling', 'Other Topics'];
const outputPath = path.join(__dirname, 'questions.json');

const allQuestions = [];

function parseFile(filePath, category, folderName) {
  const fileName = path.basename(filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract Topic Title from # header
  const titleMatch = content.match(/^#\s+(.+)$/m);
  let topicTitle = titleMatch ? titleMatch[1].trim() : fileName.replace(/\.md$/i, '');
  // Clean up prefix/suffix in title if any
  topicTitle = topicTitle
    .replace(/^PMP Exam Master Brief:\s*/i, '')
    .replace(/\s*\(People\s*·\s*Task\s*\d+\)$/i, '')
    .trim();

  // Split content into Questions and Answers parts
  const parts = content.split(/(?:##+|###+)\s+10\.\s+Answer\s+Key/i);
  const questionsPart = parts[0];
  const answersPart = parts[1] || '';

  // Extract Question blocks
  const questionBlocks = questionsPart.split(/\n\s*---\s*\n/);
  const fileQuestions = [];

  const optionRegex = /^\s*(?:\(([A-F])\)|\[([A-F])\]|([A-F])\.|([A-F])\))\s+/i;
  const qHeaderRegex = /^\s*(?:\*\*)?Q(\d+)(?:\s*[-—:\u2013\u2014]\s*([\s\S]+?))?(?:\*\*)?$/i;

  questionBlocks.forEach(block => {
    const lines = block.split('\n');
    let qNumber = null;
    let type = '';
    let questionTextLines = [];
    let options = [];
    let foundTitle = false;
    let foundFirstOption = false;

    for (let line of lines) {
      const trimmed = line.trim();
      if (!trimmed) continue;

      if (!foundTitle) {
        const qMatch = line.match(qHeaderRegex);
        if (qMatch) {
          qNumber = qMatch[1];
          type = qMatch[2] ? qMatch[2].trim() : '';
          foundTitle = true;
          continue;
        }
      }

      const isOpt = optionRegex.test(line);
      if (isOpt) {
        foundFirstOption = true;
        options.push(trimmed);
      } else {
        if (foundFirstOption) {
          if (options.length > 0) {
            options[options.length - 1] += ' ' + trimmed;
          }
        } else {
          questionTextLines.push(trimmed);
        }
      }
    }

    if (qNumber && questionTextLines.length > 0 && options.length > 0) {
      fileQuestions.push({
        id: `${fileName.replace(/\.md$/i, '')}_Q${qNumber}`,
        fileName,
        folderName,
        category,
        topic: topicTitle,
        qNumber: parseInt(qNumber, 10),
        type,
        question: questionTextLines.join('\n'),
        options
      });
    }
  });

  // Extract Answer Key blocks
  const answerBlocks = answersPart.split(/\n\s*---\s*\n/);
  const answerMap = new Map();

  answerBlocks.forEach(block => {
    // 1. Find question number
    const qNumMatch = block.match(/^\s*(?:\*\*)?Q(\d+)\b/i);
    if (!qNumMatch) return;
    const qNum = parseInt(qNumMatch[1], 10);

    // 2. Find correct answer
    const ansMatch = block.match(/Correct\s+Answers?[*\s:]*([A-F](?:[\s,]*|and|or|[A-F])+)/i);
    let correctAnswer = ansMatch ? ansMatch[1].trim() : '';
    correctAnswer = correctAnswer.replace(/[\*\s\.\,]+$/, '').trim(); // clean trailing markdown/spaces

    // 3. Find justification and mindset
    const justIndex = block.indexOf('**PMI Justification:**');
    const mindIndex = block.indexOf('**Mindset Lesson:**');
    let justification = '';
    let mindset = '';

    if (justIndex !== -1) {
      if (mindIndex !== -1) {
        justification = block.substring(justIndex + '**PMI Justification:**'.length, mindIndex).trim();
        mindset = block.substring(mindIndex + '**Mindset Lesson:**'.length).trim();
      } else {
        justification = block.substring(justIndex + '**PMI Justification:**'.length).trim();
      }
    }

    answerMap.set(qNum, {
      correctAnswer,
      justification,
      mindset
    });
  });

  // Merge questions and answers
  fileQuestions.forEach(q => {
    const ans = answerMap.get(q.qNumber);
    if (ans) {
      q.correctAnswer = ans.correctAnswer;
      q.justification = ans.justification;
      q.mindset = ans.mindset;
      allQuestions.push(q);
    } else {
      console.warn(`Warning: No answer found for ${q.id} in ${fileName}`);
    }
  });
}

function run() {
  console.log('Compiling PMP study questions (robust parser)...');

  folders.forEach(folder => {
    const folderPath = path.join(__dirname, folder);
    if (!fs.existsSync(folderPath)) {
      console.log(`Directory ${folder} does not exist, skipping.`);
      return;
    }

    const category = folder;
    const files = fs.readdirSync(folderPath);
    files.forEach(file => {
      if (file.endsWith('.md')) {
        parseFile(path.join(folderPath, file), category, folder);
      }
    });
  });

  fs.writeFileSync(outputPath, JSON.stringify(allQuestions, null, 2), 'utf8');
  console.log(`Successfully compiled ${allQuestions.length} questions to questions.json!`);
}

run();
