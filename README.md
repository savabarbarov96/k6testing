# k6 Performance Testing Suite for Newledge Portal

## Overview
This project provides a k6 performance test script for the pre-login user flows of the Newledge Portal (`https://portal.test.new-ledge.com`). It simulates real user traffic to key endpoints and generates a modern HTML report using Ben Coleman's k6-reporter.

## Getting Started

### Prerequisites
- [k6](https://k6.io/docs/getting-started/installation/) installed on your system
- Internet access to fetch the k6-reporter module

### Running the Test
1. Ensure you have `k6-prelogin-test.js` in this directory.
2. Open a terminal and run:
   ```
   k6 run k6-prelogin-test.js
   ```
3. After the test completes, a file named `summary.html` will be generated in the same directory.

### Viewing the Report
- Open `summary.html` in your web browser.
- The report provides:
  - Summary statistics (requests, errors, duration, etc.)
  - Response time percentiles and trends
  - Threshold pass/fail status
  - Grouped results for each user flow
- Use the report to quickly identify performance bottlenecks and error rates.

## Advanced Performance Testing
- **Note:** To test login and authenticated user flows, you must have access to an environment where CAPTCHA is disabled or bypassed.
- CAPTCHA currently blocks automated login, so only pre-login flows are tested in this suite.
- For full end-to-end and advanced load testing, request a test environment with CAPTCHA disabled from your development or DevOps team.

## Customization
- To extend the test for authenticated flows, add login logic and new groups to the script once CAPTCHA is disabled.
- Adjust the number of virtual users (`vus`), iterations, and endpoints as needed for your performance goals.

## References
- [k6 Documentation](https://k6.io/docs/)
- [k6-reporter (Ben Coleman)](https://github.com/benc-uk/k6-reporter)

---

*For questions or support, contact your QA or DevOps team.* 