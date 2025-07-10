// Import individual icons from devicons-react
import COriginal from "devicons-react/icons/COriginal";
import CplusplusOriginal from "devicons-react/icons/CplusplusOriginal";
import CsharpOriginal from "devicons-react/icons/CsharpOriginal";
import PythonOriginal from "devicons-react/icons/PythonOriginal";
import JavaOriginal from "devicons-react/icons/JavaOriginal";
import JavascriptOriginal from "devicons-react/icons/JavascriptOriginal";
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal";
import MysqlOriginal from "devicons-react/icons/MysqlOriginal";
import DartOriginal from "devicons-react/icons/DartOriginal";
import LaravelOriginal from "devicons-react/icons/LaravelOriginal";
import TailwindcssOriginal from "devicons-react/icons/TailwindcssOriginal";
import VuejsOriginal from "devicons-react/icons/VuejsOriginal";
import NuxtjsOriginal from "devicons-react/icons/NuxtjsOriginal";
import ReactOriginal from "devicons-react/icons/ReactOriginal";
import SpringOriginal from "devicons-react/icons/SpringOriginal";
import NextjsOriginal from "devicons-react/icons/NextjsOriginal";
import DotnetcoreOriginal from "devicons-react/icons/DotnetcoreOriginal";
import RabbitmqOriginal from "devicons-react/icons/RabbitmqOriginal";
import FlutterOriginal from "devicons-react/icons/FlutterOriginal";
import RedisOriginal from "devicons-react/icons/RedisOriginal";
import PostgresqlOriginal from "devicons-react/icons/PostgresqlOriginal";
import MongodbOriginal from "devicons-react/icons/MongodbOriginal";
import GitOriginal from "devicons-react/icons/GitOriginal";
import DockerOriginal from "devicons-react/icons/DockerOriginal";
import PostmanOriginal from "devicons-react/icons/PostmanOriginal";
import GrpcOriginal from "devicons-react/icons/GrpcOriginal";

export interface TechItem {
  name: string;
  icon: React.ComponentType<{ size?: string; color?: string; className?: string }>;
  category: 'programming' | 'framework' | 'database' | 'tool';
}

export const techStackData: TechItem[] = [
  // Programming Languages
  {
    name: 'C',
    icon: COriginal,
    category: 'programming',
  },
  {
    name: 'C++',
    icon: CplusplusOriginal,
    category: 'programming',
  },
  {
    name: 'C#',
    icon: CsharpOriginal,
    category: 'programming',
  },
  {
    name: 'Python',
    icon: PythonOriginal,
    category: 'programming',
  },
  {
    name: 'Java',
    icon: JavaOriginal,
    category: 'programming',
  },
  {
    name: 'JavaScript',
    icon: JavascriptOriginal,
    category: 'programming',
  },
  {
    name: 'TypeScript',
    icon: TypescriptOriginal,
    category: 'programming',
  },
  {
    name: 'SQL',
    icon: MysqlOriginal,
    category: 'programming',
  },
  {
    name: 'Dart',
    icon: DartOriginal,
    category: 'programming',
  },
  
  // Frameworks and Libraries
  {
    name: 'Laravel',
    icon: LaravelOriginal,
    category: 'framework',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindcssOriginal,
    category: 'framework',
  },
  {
    name: 'Vue.js',
    icon: VuejsOriginal,
    category: 'framework',
  },
  {
    name: 'Nuxt.js',
    icon: NuxtjsOriginal,
    category: 'framework',
  },
  {
    name: 'React',
    icon: ReactOriginal,
    category: 'framework',
  },
  {
    name: 'Spring Boot',
    icon: SpringOriginal,
    category: 'framework',
  },
  {
    name: 'Next.js',
    icon: NextjsOriginal,
    category: 'framework',
  },
  {
    name: 'Dotnet Core',
    icon: DotnetcoreOriginal,
    category: 'framework',
  },
  {
    name: 'RabbitMQ',
    icon: RabbitmqOriginal,
    category: 'framework',
  },
  {
    name: 'Flutter',
    icon: FlutterOriginal,
    category: 'framework',
  },
  
  // Databases
  {
    name: 'MySQL',
    icon: MysqlOriginal,
    category: 'database',
  },
  {
    name: 'Redis',
    icon: RedisOriginal,
    category: 'database',
  },
  {
    name: 'PostgreSQL',
    icon: PostgresqlOriginal,
    category: 'database',
  },
  {
    name: 'MongoDB',
    icon: MongodbOriginal,
    category: 'database',
  },
  
  // Tools
  {
    name: 'Git',
    icon: GitOriginal,
    category: 'tool',
  },
  {
    name: 'Docker',
    icon: DockerOriginal,
    category: 'tool',
  },
  {
    name: 'Postman',
    icon: PostmanOriginal,
    category: 'tool',
  },
  {
    name: 'gRPC',
    icon: GrpcOriginal,
    category: 'tool',
  },
];

// Helper functions to filter by category
export const getProgrammingLanguages = () => 
  techStackData.filter(item => item.category === 'programming');

export const getFrameworksAndLibraries = () => 
  techStackData.filter(item => item.category === 'framework');

export const getDatabases = () => 
  techStackData.filter(item => item.category === 'database');

export const getTools = () => 
  techStackData.filter(item => item.category === 'tool');

// Helper function to get tech by name
export const getTechByName = (name: string) => 
  techStackData.find(item => item.name.toLowerCase() === name.toLowerCase());

// Export organized data by category
export const organizedTechStack = {
  programming: getProgrammingLanguages(),
  frameworks: getFrameworksAndLibraries(),
  databases: getDatabases(),
  tools: getTools(),
};