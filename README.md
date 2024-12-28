# Software Engineer Role Fit Calculator

A tool designed to evaluate candidate fit for software engineering roles at Veterans United Home Loans.

## Overview

This calculator assesses candidates based on several key areas:
- Years of Experience (1-30 years)
- Programming Languages (Core & Additional)
- Frameworks (Core & Additional)
- Platforms & Tools
- Software Engineering Practices

## Scoring System

Total possible score: 100 points

### Point Distribution
- Experience: 30 points max (6 points per year, up to 5 years)
- Languages: 15 points max
  - Core Languages (8 points each): JavaScript, C#
  - Additional Languages (2 points each): Python, Java, C++, PHP, Go, Kotlin, Swift
- Frameworks: 15 points max
  - Core Frameworks (8 points each): .NET, Angular
  - Additional Frameworks (2 points each): React, Vue.js, Spring, Express.js/NestJS
- Platforms & Tools: 20 points max
  - Core Platforms (5 points each): MIA, GitHub, SQL, Grafana, Kafka
  - Additional Platforms (1 point each): Various other tools
- Software Engineering Practices: 20 points max (3 points each)

### Rating Thresholds
- Excellent Match: 70-100 points
- Good Match: 50-69 points
- Needs Improvement: 0-49 points

### Platforms & Tools Details
Core Platforms (5 points each):
- MIA (Internal Developer Platform)
- GitHub (CI/CD)
- SQL (Data Persistence)
- Grafana (Observability)
- Kafka (Eventing)

Additional Platforms (1 point each):
- GitLab
- Azure DevOps
- RabbitMQ
- MongoDB
- Redis
- Elasticsearch
- Storage Grid
- Camunda
- Launch Darkly
- Playwright

### Software Engineering Practices (3 points each):
- API-First Design
- Domain Driven Design
- Clean Code
- Test Driven Design
- Pair Programming
- Cloud Experience
- Microservice Architecture

## Project Structure

## Key Features

- Interactive experience slider (1-30 years)
- Skill selection through checkboxes
- Real-time score calculation
- Responsive design
- Informative tooltips for additional context
- Visual feedback through color-coded results

## Technical Details

### Core Technologies
- Angular
- TypeScript
- SCSS

### Key Components

#### Experience Slider
- Custom-built slider component
- Range: 1-30 years
- Real-time updates

#### Skill Sections
- Organized by category
- Premium/core skills highlighted
- Tooltip information for context

#### Score Display
- Dynamic color changes based on score
- Animated gradient backgrounds
- Responsive feedback messages

## Development

### Prerequisites
- Node.js (v14 or higher)
- Angular CLI (v16 or higher)

### Setup

# Install dependencies
npm install

# Start development server
ng serve
# The app will be available at http://localhost:4200

# Run tests
ng test
# This will open Karma test runner in your default browser

# Run end-to-end tests
ng e2e

# Build for production
ng build --prod
# Output will be in the dist/ directory

# Lint the code
ng lint

# Generate new component
ng generate component calculator/components/new-component

# Generate new service
ng generate service calculator/services/new-service

### Adding New Skills

To add new skills to the calculator:

1. Update the relevant constants in `skills.constants.ts`
2. Add new types if needed in `types/index.ts`
3. Update the scoring logic in `scoring.service.ts`
4. Add any new UI elements in the appropriate component

## Maintenance

### Adding Core Skills
To add new core skills:
1. Update `CORE_LANGUAGES` or `CORE_FRAMEWORKS` in constants
2. Update the scoring calculation in `ScoringService`
3. Add the UI element in the appropriate template

### Modifying Score Thresholds
Update the `ScoreThreshold` enum in `score-thresholds.enum.ts`

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Ensure tests pass

## Testing

The application includes unit tests for:
- Scoring calculations
- Component rendering
- User interactions

Run tests with: `ng test`

## Future Enhancements

Potential improvements to consider:
- Additional skill categories
- More detailed feedback
- Skill weight customization
- Export/save results
- Candidate comparison feature

## Support

For questions or issues, please contact the development team.

## License

Internal use only - Veterans United Home Loans
