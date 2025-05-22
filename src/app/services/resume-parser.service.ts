import { Injectable } from '@angular/core';
import { SkillsModel } from '../calculator/models/skills.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeParserService {
  parse(text: string): SkillsModel {
    const lower = text.toLowerCase();
    const skills: SkillsModel = {
      experience: this.extractExperience(lower),
      languages: {
        javascript: this.hasAny(lower, ['javascript', 'typescript']),
        csharp: this.hasAny(lower, ['c#', 'csharp', '.net']),
        python: lower.includes('python'),
        java: lower.includes('java'),
        cpp: lower.includes('c++'),
        php: lower.includes('php'),
        go: lower.includes('go '),
        kotlin: lower.includes('kotlin'),
        swift: lower.includes('swift')
      },
      frameworks: {
        dotnet: this.hasAny(lower, ['.net', 'dotnet', 'asp.net']),
        angular: lower.includes('angular'),
        react: lower.includes('react'),
        vue: lower.includes('vue'),
        spring: lower.includes('spring'),
        express: this.hasAny(lower, ['express', 'nestjs'])
      },
      platforms: {
        mia: lower.includes('mia'),
        github: lower.includes('github'),
        gitlab: lower.includes('gitlab'),
        azureDevops: lower.includes('azure devops'),
        rabbitmq: lower.includes('rabbitmq'),
        sql: lower.includes('sql'),
        grafana: lower.includes('grafana'),
        kafka: lower.includes('kafka'),
        mongodb: lower.includes('mongodb'),
        redis: lower.includes('redis'),
        elasticsearch: lower.includes('elasticsearch'),
        storageGrid: lower.includes('storagegrid'),
        camunda: lower.includes('camunda'),
        launchDarkly: lower.includes('launchdarkly'),
        playwright: lower.includes('playwright')
      },
      skills: {
        apiFirst: lower.includes('api-first'),
        ddd: lower.includes('domain-driven design') || lower.includes('ddd'),
        cleanCode: lower.includes('clean code'),
        tdd: lower.includes('test-driven development') || lower.includes('tdd'),
        pairProgramming: lower.includes('pair programming'),
        cloud: lower.includes('cloud'),
        microservices: lower.includes('microservice')
      }
    };
    return skills;
  }

  private extractExperience(text: string): number {
    const match = text.match(/(\d+)(?:\+)?\s+years?/);
    if (match) {
      return Math.min(parseInt(match[1], 10), 30);
    }
    return 0;
  }

  private hasAny(text: string, keywords: string[]): boolean {
    return keywords.some(k => text.includes(k));
  }
}
