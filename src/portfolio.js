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
    `As a highly motivated AI Engineer, I have a passion for utilizing cutting-edge technology to solve complex problems
     After participating in a Google Machine Learning workshop, I knew that I wanted to pursue a career in this field.
     Upon completing my Bachelor's Degree in Computer Science, I made the decision to further my education with an online Master's Degree in Data Science.
     During this program, I gained expertise in Data Analysis, Data Engineering, and Data Science.
     I have also gained valuable experience working as a Full Stack Developer, Data Scientist/Analyst, and Data Annotator for several companies.
     In addition, I have completed various certifications in Data Science, Data Analysis, Data Engineering, and Software Engineering.
     I am a lifelong learner with a strong desire to understand how everything works and constantly seek new ways to automate processes.`,
  email: 'mazymohamed06@gmail.com',
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
      'A company wants to build a mobile app of books reading and build a recommender system to recommend new books to users.',
    stack: ['Python', 'Azure Cloud', 'ReactJS', 'Serverless'],
    sourceCode: 'https://github.com/mazy06000/recommendation-system',
    livePreview: '/recommendation-system',
    streamlitUrl: 'https://mazy06000-recommendation-system-app-0h0k2d.streamlitapp.com/'
  },
  {
    name: 'Autonomous Car',
    description:
      'A company wants to build a model to make an autonomous car. There are three task to do: image processing, image segmentation and decision making.',
    stack: ['Python', 'Azure Cloud', 'Flask', 'Tensorflow', 'Computer Vision'],
    sourceCode: 'https://github.com/mazy06000/autonomous-car',
    livePreview: '/autonomous-car',
    streamlitUrl: 'https://mazy06000-autonomous-car-app-g72fil.streamlitapp.com/'
  },
  {
    name: 'Detect Negative Reviews',
    description:
      'An airline company wants to detect all negative reviews against their company to improve their services.',
    stack: ['Python', 'Azure Cloud', 'Steamlit', 'Rest API', 'NLP', 'BERT'],
    sourceCode: 'https://github.com/mazy06000/negative-reviews-detection/',
    livePreview: '/negative-reviews-detection',
    streamlitUrl: 'https://mazy06000-negative-reviews-detection-app-i8s0g1.streamlitapp.com/'
  },
  {
    name: 'Topic Modeling & Image Labeling',
    description:
      'A customer reviews company wants to know the dissatisfaction topics and to label automatically images uploaded by a customer.',
    stack: ['Python', 'Tensorflow', 'NLP', 'Computer Vision'],
    sourceCode: 'https://github.com/mazy06000/topic-modeling-image-labeling',
    livePreview: '/topic-modeling-image-labeling',
    streamlitUrl: 'https://mazy06000-topic-modeling-image-labeling-app-h84ng2.streamlitapp.com/'
  },
  {
    name: 'Customer Segmentation',
    description:
      'An e-commerce company wants to segment their customers to make a marketing decision based on their habits.',
    stack: ['Python', 'Scikit-learn'],
    sourceCode: 'https://github.com/mazy06000/customer-segmentation',
    livePreview: '/customer-segmentation',
    streamlitUrl: 'https://mazy06000-customer-segmentation-notebook-eda-qf56mi.streamlitapp.com/'
  },
  {
    name: 'Loan Prediction',
    description:
      'An financial company wants to automize the checking process if a customer is eligible to loan and to explain why the customer is eligible or not.',
    stack: ['Python', 'Scikit-learn'],
    sourceCode: 'https://github.com/mazy06000/loan-prediction',
    livePreview: '/loan-prediction',
    streamlitUrl: 'https://mazy06000-loan-prediction-app-dk6un8.streamlitapp.com/'
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
  'Seaborn',
  'JavaScript',
  'FastAPI',
  'HTML/CSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: null,
}

export { header, about, projects, skills, contact }
