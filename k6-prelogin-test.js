import http from 'k6/http';
import { group, sleep } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';

export const options = {
  vus: 20, // Number of virtual users
  iterations: 100, // Total number of iterations (adjust as needed)
  thresholds: {
    http_req_failed: ['rate<0.01'], // <1% errors
    http_req_duration: ['p(95)<800'], // 95% of requests below 800ms
  },
  // Ensure test completes in <5min
  maxDuration: '5m',
};

const BASE_URL = 'https://portal.test.new-ledge.com';

export default function () {
  group('Landing Page', function () {
    http.get(`${BASE_URL}/`);
    sleep(1);
  });

  group('Login Page', function () {
    http.get(`${BASE_URL}/login`);
    sleep(1);
  });

  group('Pre-Login API Endpoints', function () {
    http.get('https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/auth/getSelect');
    http.get('https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/auth/departments');
    http.get('https://ln3oab229k.execute-api.eu-west-1.amazonaws.com/test/api/campaign/4d7c4b92-c9b3-4846-9a30-34ca2921e059');
    sleep(1);
  });
}

// HTML report generation using k6-reporter (Ben Coleman)
export function handleSummary(data) {
  return {
    'summary.html': htmlReport(data),
  };
}

/*
Instructions:
1. Save this script as k6-prelogin-test.js
2. Install k6 (https://k6.io/docs/getting-started/installation/)
3. Run the test:
   k6 run k6-prelogin-test.js
4. After the test, open summary.html in your browser to view the report.

- For more advanced reporting, see: https://github.com/benc-uk/k6-reporter
- To extend this script for authenticated flows, add login logic and new groups as needed.
*/ 