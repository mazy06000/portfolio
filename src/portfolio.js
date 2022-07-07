const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '/',
  title: 'MM',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohamed Mazy',
  role: 'AI Engineer | Software Engineer',
  description:
    `After participing to a Google Machine Learning workshop, I knew that I wanted to work as AI Engineer.
    Once I have completed my Bachelor's Degree in Computer Science, I decided to leave France to the UK.
    During my online Master's Degree in Data Science I learnt Data Analysis, Data Engineering and Data Science
    Besides that I learnt English and did personal projects, but also while working as Full Stack Developer,
    Data Scientist/Analyst and Data Annotator for 3 different companies.
    I love learning new things, I adapt quickly, and to leave my comfort zone does not scare me.`,
  resume: 'resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mohamed-mazy',
    github: 'https://github.com/mazy06000',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Recommendation System',
    description:
      'A company want to build a mobile app of books reading and build a recommender system to recommend new books to users.',
    stack: ['Python', 'Azure Cloud', 'ReactJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Autonomous Car',
    description:
      'The company want to build a model in order to make an autonomous car. There are three task to do: image processing, image segmentation and decision making.',
    stack: ['Python', 'Azure Cloud', 'Flask', 'Tensorflow', 'Computer Vision'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Detect Negative Reviews',
    description:
      'An airline company wants to detect all negative reviews against their company in order to improve their services.',
    stack: ['Python', 'Azure Cloud', 'Steamlit','Rest API','NLP','BERT'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Topic Modeling & Image Labeling',
    description:
      'A customer reviews company want to know the dissatisfaction topics and to label automatically images uploaded by a customer.',
    stack: ['Python', 'Tensorflow','NLP','Computer Vision'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Customer Segmentation',
    description:
      'E-commerce company want to segment their customers in order to make a marketing decision based on their habits.',
    stack: ['Python', 'Scikit-learn'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Loan Prediction',
    description:
      'Financial company want to automize the checking process if a customer is eligible to loan and to explain why the customer is eligible or not.',
    stack: ['Python', 'Scikit-learn'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Pandas',
  'Tensorflow',
  'Numpy',
  'Keras',
  'Machine Leaning',
  'ReactJs',
  'SQL',
  'Django',
  'Git',
  'CI/CD',
  'Jira',
  'Flask',
  'NLP',
  'Computer Vision',
  'Deep Learning',
  'Rest API',
  'Plotly',
  'Azure Services',
  'Docker',
  'Seaborn'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mazymohamed06@gmail.com',
}

export { header, about, projects, skills, contact }
