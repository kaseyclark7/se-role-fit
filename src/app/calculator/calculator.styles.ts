export const styles = `
    .calculator-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .header {
      text-align: center;
      margin-bottom: 2rem;
      padding: 1rem;
      background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
      border-radius: 12px;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .header h1 {
      margin: 0;
      color: white;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: 0.01em;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    }

    .header h2 {
      margin: 0.5rem 0 0;
      color: rgba(255, 255, 255, 0.9);
      font-size: 1.25rem;
      font-weight: 500;
      letter-spacing: 0.01em;
    }

    h2 {
      color: rgba(255, 255, 255, 0.9);
      margin: 0.5rem 0 0;
      font-size: 1.3rem;
    }

    h3 {
      color: #4338ca;
      margin: 1rem 0;
      font-size: 1rem;
      opacity: 0.8;
    }

    .form-group {
      background: #f5f3ff;
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      border: 1px solid #e5e7eb;
    }

    .experience-section {
      background: #f5f3ff !important;
      label {
        display: block;
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: #374151;
      }
    }

    label {
      display: block;
      margin-bottom: 1rem;
      color: #4338ca;
      font-weight: 600;
      font-size: 1.1rem;
    }

    .checkbox-group {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-top: 0.5rem;
    }

    .skill-bubble {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.7rem 1.2rem;
      background: white;
      border-radius: 100px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.3s ease;
      border: 2px solid transparent;
    }

    .skill-bubble.premium {
      background: linear-gradient(135deg, #fff 0%, #f0f4ff 100%);
      border: 2px solid #6366f1;
    }

    .skill-bubble:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    .other-language {
      display: flex;
      align-items: center;
    }

    .other-input {
      margin-left: 0.5rem;
      padding: 0.3rem 0.8rem;
      border: 1px solid #e2e8f0;
      border-radius: 100px;
      font-size: 0.9rem;
      width: 150px;
    }

    .other-input:focus {
      outline: none;
      border-color: #6366f1;
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
    }

    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      border-radius: 6px;
      cursor: pointer;
      accent-color: #6366f1;
    }

    .skill-section {
      background: #f5f3ff;
      padding: 1.5rem;
      border-radius: 16px;
      margin-bottom: 2rem;
    }

    .skill-section:nth-child(even) {
    }

    .premium-languages, .additional-languages {
      margin-bottom: 1.5rem;
    }

    .result {
      background: #e2e8f0;
      padding: 1rem 2rem;
      border-radius: 12px;
      box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      pointer-events: auto;
      max-width: 800px;
      width: 100%;
      margin: 0 auto;
      transition: all 0.3s ease;
    }

    .result.needs-improvement {
      background: linear-gradient(135deg, #fef3c7 0%, #fcd34d 50%, #fdba74 100%);
      color: #7c2d12;
      box-shadow: 0 -2px 10px rgba(251, 191, 36, 0.2);
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
      animation: gradient-shift 8s ease infinite;
      background-size: 200% 200%;
    }

    .result.good {
      background: linear-gradient(135deg, #dcfce7 0%, #86efac 50%, #4ade80 100%);
      color: #064e3b;
      box-shadow: 0 -2px 10px rgba(34, 197, 94, 0.2);
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
      animation: gradient-shift 8s ease infinite;
      background-size: 200% 200%;
    }

    .result.excellent {
      background: linear-gradient(135deg, #818cf8 0%, #c084fc 50%, #f472b6 100%);
      color: #ffffff;
      box-shadow: 0 -2px 15px rgba(129, 140, 248, 0.3);
      animation: gradient-shift 8s ease infinite;
      background-size: 200% 200%;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      font-weight: 600;
    }

    @keyframes gradient-shift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .result.needs-improvement,
    .result.good,
    .result.excellent {
      animation: gradient-shift 8s ease infinite, scale-in 0.3s ease-out;
    }

    @keyframes scale-in {
      0% {
        transform: scale(0.95);
      }
      50% {
        transform: scale(1.02);
      }
      100% {
        transform: scale(1);
      }
    }

    .result h3 {
      font-size: 1.5rem;
      margin: 0;
      font-weight: 700;
      letter-spacing: 0.01em;
    }

    .result p {
      margin: 0.5rem 0 0;
      opacity: 1;
      font-weight: 500;
      line-height: 1.4;
    }

    .platform-category {
      margin-bottom: 1.5rem;
    }

    .platform-category h3 {
      color: #4338ca;
      font-size: 1rem;
      margin-bottom: 0.8rem;
      opacity: 0.9;
    }

    .platform-category:last-child {
      margin-bottom: 0;
    }

    .premium-languages, .additional-languages, .premium-frameworks, .additional-frameworks {
      margin-bottom: 1.5rem;
    }

    .premium-languages h3,
    .additional-languages h3,
    .premium-frameworks h3,
    .additional-frameworks h3 {
      color: #4338ca;
      font-size: 1rem;
      margin-bottom: 0.8rem;
      opacity: 0.9;
    }

    .result-container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9) 20%);
      padding: 1rem;
      z-index: 1000;
      display: flex;
      justify-content: center;
      pointer-events: none;
    }

    .experience-form {
      padding-bottom: 120px;
    }

    .info-tooltip {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-left: 6px;
      width: 16px;
      height: 16px;
      background: #e0e7ff;
      color: #4f46e5;
      border-radius: 50%;
      cursor: help;
      font-size: 0.7rem;
      font-weight: bold;
      vertical-align: middle;
      transition: all 0.2s ease;
    }

    .info-tooltip:hover {
      background: #4f46e5;
      color: white;
      transform: translateY(-1px);
    }

    .tooltip-text {
      visibility: hidden;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(8px);
      background: #1e1b4b;
      color: white;
      text-align: center;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: normal;
      white-space: nowrap;
      z-index: 1;
      top: 100%;
      opacity: 0;
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .tooltip-text::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent #1e1b4b transparent;
    }

    .info-tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }

    .framework-info {
      margin-left: 4px;
      width: 14px;
      height: 14px;
      font-size: 0.65rem;
    }

    .framework-info .tooltip-text {
      font-size: 0.75rem;
      font-weight: normal;
    }

    .label-with-tooltip {
      position: relative;
      cursor: help;
    }

    .label-with-tooltip .tooltip-text {
      visibility: hidden;
      position: absolute;
      left: 50%;
      transform: translateX(-50%) translateY(8px);
      background: #1e1b4b;
      color: white;
      text-align: center;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 0.75rem;
      font-weight: normal;
      white-space: nowrap;
      z-index: 1;
      top: 100%;
      opacity: 0;
      transition: all 0.2s ease;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                  0 2px 4px -1px rgba(0, 0, 0, 0.06);
    }

    .label-with-tooltip .tooltip-text::before {
      content: '';
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-width: 6px;
      border-style: solid;
      border-color: transparent transparent #1e1b4b transparent;
    }

    .label-with-tooltip:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
`;