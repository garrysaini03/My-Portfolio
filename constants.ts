import { Project, SkillCategory } from './types';

export const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'Skills', path: '/skills' },
  { label: 'Contact', path: '/contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Sales and Revnue Dashboard',
    description: 'A multi-page interactive AQI dashboard. Features pollutant tracking, ETL processing, DAX measures, state-wise filtering, and environmental trend reporting.',
    tech: ['Power BI', 'Excel', 'DAX', 'Power Query'],
    color: '#dc2626', // Red
    github: 'https://github.com/garrysaini03/Sales-and-Revenue-Dashboard',
    
  },
  {
    id: 2,
    title: 'ClimateForecaster AI',
    description: 'ML system handling data cleaning, Random Forest modeling, and predictive forecasts with Streamlit web deployment.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    color: '#b91c1c', // Dark Red
    github: 'https://github.com/garrysaini03/ClimateForecaster-AI',
  },
  {
    id: 3,
    title: 'StockX (TrendMiner)',
    description: 'Deep Learning system forecasting stock prices using LSTM networks, time-series analysis, and data normalization.',
    tech: ['LSTM', 'Keras', 'Python', 'Time-Series'],
    color: '#ef4444', // Light Red
    github: 'https://github.com/garrysaini03/StockX-TrendMiner-',
  }
];

export const SKILLS: SkillCategory[] = [
  {
    title: 'Data Analysis & Querying',
    skills: ['SQL', 'MySQL', 'ETL', 'Data Cleaning', 'Data Transformation', 'Ad-hoc Analysis']
  },
  {
    title: 'Visualization & BI',
    skills: ['Power BI', 'Tableau', 'KPI Reporting', 'DAX', 'Power Query', 'Stakeholder Reporting']
  },
  {
    title: 'Programming & Analytics',
    skills: ['Python', 'Pandas', 'NumPy', 'Machine Learning', 'Scikit-learn', 'Data Pipelines']
  },
  {
    title: 'Tools & Concepts',
    skills: ['MS Excel', 'Git/GitHub', 'Streamlit', 'Data Modeling', 'Business Intelligence', 'Trend Analysis']
  }
];