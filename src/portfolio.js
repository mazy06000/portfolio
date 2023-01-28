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
    `As a highly motivated AI Engineer, I have a passion for utilizing cutting-edge technology to solve complex problems.
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
    name: 'GPT-3 Branding Assistant',
    description:
      'AI-powered branding assistant SaaS utilizing GPT-3 technology for businesses to create and maintain a strong brand identity.',
    stack: ['Python', "FastAPI", 'AWS Lambda', 'ReactJS', 'Serverless', "Typescript", "NLP", "GPT-3", "Tailwind", "Vercel"],
    sourceCode: 'https://github.com/mazy06000/gpt3-branding-assistant',
    livePreview: 'https://transme.vercel.app/',
  },
  {
    name: 'Recommendation System',
    description:
      'A company is looking to develop a mobile application for reading books and implementing a recommendation system to suggest new literature to users.',
    stack: ['Python', 'Azure Cloud', 'ReactJS', 'Serverless'],
    sourceCode: 'https://github.com/mazy06000/recommendation-system',
    livePreview: '/recommendation-system',
    streamlitUrl: 'https://mazy06000-recommendation-system-app-0h0k2d.streamlitapp.com/'
  },
  {
    name: 'Autonomous Car',
    description:
      'A company is working on creating an autonomous vehicle by building a model that can perform image processing, image segmentation, and decision-making tasks.',
    stack: ['Python', 'Azure Cloud', 'Flask', 'Tensorflow', 'Computer Vision'],
    sourceCode: 'https://github.com/mazy06000/autonomous-car',
    livePreview: '/autonomous-car',
    streamlitUrl: 'https://mazy06000-autonomous-car-app-g72fil.streamlitapp.com/'
  },
  {
    name: 'Detect Negative Reviews',
    description:
      'An airline company is seeking to identify all negative feedback regarding their services in order to implement improvements.',
    stack: ['Python', 'Azure Cloud', 'Steamlit', 'Rest API', 'NLP', 'BERT'],
    sourceCode: 'https://github.com/mazy06000/negative-reviews-detection/',
    livePreview: '/negative-reviews-detection',
    streamlitUrl: 'https://mazy06000-negative-reviews-detection-app-i8s0g1.streamlitapp.com/'
  },
  {
    name: 'Topic Modeling & Image Labeling',
    description:
      'A customer reviews company wants to identify common themes of dissatisfaction and automatically classify images provided by customers.',
    stack: ['Python', 'Tensorflow', 'NLP', 'Computer Vision'],
    sourceCode: 'https://github.com/mazy06000/topic-modeling-image-labeling',
    livePreview: '/topic-modeling-image-labeling',
    streamlitUrl: 'https://mazy06000-topic-modeling-image-labeling-app-h84ng2.streamlitapp.com/'
  },
  {
    name: 'Customer Segmentation',
    description:
      'An e-commerce company wants to divide their customers into groups in order to make marketing decisions based on their purchasing habits.',
    stack: ['Python', 'Scikit-learn'],
    sourceCode: 'https://github.com/mazy06000/customer-segmentation',
    livePreview: '/customer-segmentation',
    streamlitUrl: 'https://mazy06000-customer-segmentation-notebook-eda-qf56mi.streamlitapp.com/'
  },
  {
    name: 'Loan Prediction',
    description:
      'A financial company wants to automate the loan eligibility evaluation process and provide explanations for the decision, whether the customer is approved or denied.',
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
