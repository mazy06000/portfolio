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
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
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
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
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
