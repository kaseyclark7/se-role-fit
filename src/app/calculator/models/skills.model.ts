export interface SkillsModel {
  experience: number;
  languages: {
    // Core Languages
    javascript: boolean;
    csharp: boolean;
    // Additional Languages
    python: boolean;
    java: boolean;
    cpp: boolean;
    php: boolean;
    go: boolean;
    kotlin: boolean;
    swift: boolean;
  };
  frameworks: {
    // Core Frameworks
    dotnet: boolean;
    angular: boolean;
    // Additional Frameworks
    react: boolean;
    vue: boolean;
    spring: boolean;
    express: boolean;
  };
  platforms: {
    // Internal Developer Platform
    mia: boolean;
    // CI/CD
    github: boolean;
    gitlab: boolean;
    azureDevops: boolean;
    // Eventing
    rabbitmq: boolean;
    kafka: boolean;
    // Data Persistence
    sql: boolean;
    mongodb: boolean;
    redis: boolean;
    elasticsearch: boolean;
    storageGrid: boolean;
    // Business Workflow
    camunda: boolean;
    // Feature Toggling
    launchDarkly: boolean;
    // Remote Process Automation
    playwright: boolean;
    // Observability
    grafana: boolean;
  };
  skills: {
    apiFirst: boolean;
    ddd: boolean;
    cleanCode: boolean;
    tdd: boolean;
    pairProgramming: boolean;
    cloud: boolean;
    microservices: boolean;
  };
}