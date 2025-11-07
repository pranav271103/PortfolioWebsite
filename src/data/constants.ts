// AI/ML Skills for the 3D Keyboard
export enum SkillNames {
  // Core ML/DL
  PYTHON = "python",
  TENSORFLOW = "tensorflow",
  PYTORCH = "pytorch",
  KERAS = "keras",
  
  // LLM & NLP
  TRANSFORMERS = "transformers",
  HUGGINGFACE = "huggingface",
  LANGCHAIN = "langchain",
  OPENAI = "openai",
  
  // Computer Vision
  OPENCV = "opencv",
  YOLO = "yolo",
  
  // MLOps
  MLFLOW = "mlflow",
  DVC = "dvc",
  LINUX = "linux",
  
  // Data Processing
  PANDAS = "pandas",
  NUMPY = "numpy",
  
  // Cloud & Deployment
  AWS = "aws",
  GCP = "gcp",
  VERCEL = "vercel",
  DOCKER = "docker",
  KUBERNETES = "kubernetes",
  
  // Quantum
  QISKIT = "qiskit",
  
  // Version Control
  GIT = "git",
  GITHUB = "github",
  
  // ML & Data Science
  SCIKIT_LEARN = "scikit-learn",
  // Web Frameworks
  STREAMLIT = "streamlit",
  GRADIO = "gradio"
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

// Skill data mapping
export const SKILLS: Record<SkillNames, Skill> = {
  // Core ML/DL
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "Primary language for AI/ML development and data science",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
  },
  [SkillNames.TENSORFLOW]: {
    id: 2,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "End-to-end open source platform for machine learning",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
  },
  [SkillNames.PYTORCH]: {
    id: 3,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "Open source ML framework that accelerates the path from research to production",
    color: "#EE4C2C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
  },
  [SkillNames.KERAS]: {
    id: 4,
    name: "keras",
    label: "Keras",
    shortDescription: "High-level neural networks API, written in Python",
    color: "#D00000",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png"
  },
  
  // LLM & NLP
  [SkillNames.TRANSFORMERS]: {
    id: 5,
    name: "transformers",
    label: "Transformers",
    shortDescription: "State-of-the-art NLP models like BERT, GPT, and T5",
    color: "#FFD43B",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
  },
  [SkillNames.HUGGINGFACE]: {
    id: 6,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "Open-source library for natural language processing",
    color: "#FFD43B",
    icon: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg"
  },
  [SkillNames.LANGCHAIN]: {
    id: 7,
    name: "langchain",
    label: "LangChain",
    shortDescription: "Framework for developing applications powered by language models",
    color: "#00A67E",
    icon: "https://langchain.com/img/brand/theme-image.png"
  },
  [SkillNames.OPENAI]: {
    id: 8,
    name: "openai",
    label: "OpenAI",
    shortDescription: "Building and deploying AI models including GPT and DALL-E",
    color: "#412991",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/OpenAI_Logo.svg/1024px-OpenAI_Logo.svg.png"
  },
  
  // Computer Vision
  [SkillNames.OPENCV]: {
    id: 9,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "Open source computer vision and machine learning software library",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
  },
  [SkillNames.YOLO]: {
    id: 10,
    name: "yolo",
    label: "YOLO",
    shortDescription: "Real-time object detection system",
    color: "#00A67E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/2e/YOLO_Logo.svg"
  },
  
  // MLOps
  [SkillNames.MLFLOW]: {
    id: 11,
    name: "mlflow",
    label: "MLflow",
    shortDescription: "Open source platform for the machine learning lifecycle",
    color: "#0194E2",
    icon: "https://www.databricks.com/wp-content/uploads/2021/03/MLflow-logo-pos-TM-1.png"
  },
  [SkillNames.DVC]: {
    id: 12,
    name: "dvc",
    label: "DVC",
    shortDescription: "Data Version Control - Git for data science and ML",
    color: "#13ADC7",
    icon: "https://www.dvc.org/img/logo.svg"
  },
  [SkillNames.LINUX]: {
    id: 13,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system for development and deployment",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
  },
  
  // Data Processing
  [SkillNames.PANDAS]: {
    id: 14,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Fast, powerful, and flexible data analysis/manipulation library",
    color: "#150458",
    icon: "https://pandas.pydata.org/static/img/pandas_white.svg"
  },
  [SkillNames.NUMPY]: {
    id: 15,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Fundamental package for scientific computing with Python",
    color: "#4D77CF",
    icon: "https://numpy.org/images/logo.svg"
  },
  
  // Cloud & Deployment
  [SkillNames.AWS]: {
    id: 16,
    name: "aws",
    label: "AWS",
    shortDescription: "Cloud services for AI/ML including SageMaker, Bedrock, and more",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  },
  [SkillNames.GCP]: {
    id: 17,
    name: "gcp",
    label: "Google Cloud",
    shortDescription: "Cloud AI, Vertex AI, and ML services",
    color: "#4285F4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
  },
  [SkillNames.DOCKER]: {
    id: 18,
    name: "docker",
    label: "Docker",
    shortDescription: "Containerization for consistent ML model deployment",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  [SkillNames.KUBERNETES]: {
    id: 19,
    name: "kubernetes",
    label: "Kubernetes",
    shortDescription: "Orchestration system for managing containerized ML applications",
    color: "#326CE5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
  },
  
  // Quantum
  [SkillNames.QISKIT]: {
    id: 20,
    name: "qiskit",
    label: "Qiskit",
    shortDescription: "Open source quantum computing framework for quantum machine learning",
    color: "#6523E6",
    icon: "https://qiskit.org/images/qiskit-logo.png"
  },
  
  // Deployment
  [SkillNames.VERCEL]: {
    id: 21,
    name: "vercel",
    label: "Vercel",
    shortDescription: "Cloud platform for static sites and serverless functions",
    color: "#000000",
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
  },
  
  // Version Control
  [SkillNames.GIT]: {
    id: 22,
    name: "git",
    label: "Git",
    shortDescription: "Version control for machine learning projects",
    color: "#F05032",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  [SkillNames.GITHUB]: {
    id: 23,
    name: "github",
    label: "GitHub",
    shortDescription: "Platform for version control and collaboration",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
  },
  
  // ML & Data Science
  [SkillNames.SCIKIT_LEARN]: {
    id: 24,
    name: "scikit-learn",
    label: "Scikit-learn",
    shortDescription: "Machine learning library for Python, built on NumPy and SciPy",
    color: "#F7931E",
    icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
  },
  // Web Frameworks
  [SkillNames.STREAMLIT]: {
    id: 25,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "The fastest way to build and share data apps",
    color: "#FF4B4B",
    icon: "https://streamlit.io/images/brand/streamlit-mark-color.svg"
  },
  [SkillNames.GRADIO]: {
    id: 26,
    name: "gradio",
    label: "Gradio",
    shortDescription: "Build & share delightful machine learning apps",
    color: "#FF4B4B",
    icon: "https://gradio.app/assets/gradio-logo.svg"
  }
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don&apos;t try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Light mode: Because sometimes you want to feel like you&apos;re staring into the sun.",
    "Warning: May cause temporary blindness. Use with caution.",
    "Light mode activated. Sunglasses recommended.",
    "You&apos;ve been warned: Light mode is not for the faint of heart.",
  ],
  dark: [
    "Dark mode: Because your retinas will thank you later.",
    "Ah, a fellow creature of the night. Welcome to the dark side.",
    "Dark mode activated. Your eyes can finally relax.",
    "Embrace the darkness. It&apos;s easier on the eyes.",
    "Dark mode: Because not all heroes wear capes, some just turn off the lights.",
    "You&apos;ve chosen... wisely.",
    "Dark mode: The official theme of night owls everywhere.",
    "Saving your eyes, one dark mode at a time.",
  ],
};
