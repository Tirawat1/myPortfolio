// Import individual icons from devicons-react
import GoOriginal from "devicons-react/icons/GoOriginal";
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
import DbeaverOriginal from "devicons-react/icons/DbeaverOriginal";

export interface TechItem {
  name: string;
  icon: React.ComponentType<{ size?: string; color?: string; className?: string }>;
  category: 'backend' | 'frontend' | 'database' | 'tool';
}

export const techStackData: TechItem[] = [
  // Backend languages, frameworks & protocols
  {
    name: 'Go',
    icon: GoOriginal,
    category: 'backend',
  },
  {
    name: 'C',
    icon: COriginal,
    category: 'backend',
  },
  {
    name: 'C++',
    icon: CplusplusOriginal,
    category: 'backend',
  },
  {
    name: 'C#',
    icon: CsharpOriginal,
    category: 'backend',
  },
  {
    name: 'Python',
    icon: PythonOriginal,
    category: 'backend',
  },
  {
    name: 'Java',
    icon: JavaOriginal,
    category: 'backend',
  },
  {
    name: 'Dotnet Core',
    icon: DotnetcoreOriginal,
    category: 'backend',
  },
  {
    name: 'gRPC',
    icon: GrpcOriginal,
    category: 'backend',
  },
  {
    name: 'RabbitMQ',
    icon: RabbitmqOriginal,
    category: 'backend',
  },
  {
    name: 'Spring Boot',
    icon: SpringOriginal,
    category: 'backend',
  },
  {
    name: 'Laravel',
    icon: LaravelOriginal,
    category: 'backend',
  },

  // Frontend languages & frameworks
  {
    name: 'JavaScript',
    icon: JavascriptOriginal,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    icon: TypescriptOriginal,
    category: 'frontend',
  },
  {
    name: 'Dart',
    icon: DartOriginal,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    icon: TailwindcssOriginal,
    category: 'frontend',
  },
  {
    name: 'Vue.js',
    icon: VuejsOriginal,
    category: 'frontend',
  },
  {
    name: 'Nuxt.js',
    icon: NuxtjsOriginal,
    category: 'frontend',
  },
  {
    name: 'React',
    icon: ReactOriginal,
    category: 'frontend',
  },
  {
    name: 'Next.js',
    icon: NextjsOriginal,
    category: 'frontend',
  },
  {
    name: 'Flutter',
    icon: FlutterOriginal,
    category: 'frontend',
  },

  // Databases
  {
    name: 'SQL',
    icon: MysqlOriginal,
    category: 'database',
  },
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
    name: 'DBeaver',
    icon: DbeaverOriginal,
    category: 'tool',
  },
];

// Helper functions to filter by category
export const getBackend = () =>
  techStackData.filter(item => item.category === 'backend');

export const getFrontend = () =>
  techStackData.filter(item => item.category === 'frontend');

export const getDatabases = () =>
  techStackData.filter(item => item.category === 'database');

export const getTools = () =>
  techStackData.filter(item => item.category === 'tool');

// Helper function to get tech by name
export const getTechByName = (name: string) =>
  techStackData.find(item => item.name.toLowerCase() === name.toLowerCase());

// Export organized data by category
export const organizedTechStack = {
  backend: getBackend(),
  frontend: getFrontend(),
  databases: getDatabases(),
  tools: getTools(),
};
