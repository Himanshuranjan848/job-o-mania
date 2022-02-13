# job-o-mania




<!-- PROJECT SHIELDS -->
<!--
* I'm using markdown "reference style" links for readability.
* Reference links are enclosed in brackets [ ] instead of parentheses ( ).
* See the bottom of this document for the declaration of the reference variables
* for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
* https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



# Job-O-mania
  A web app built for job-seekers and company.

<img src="https://forthebadge.com/images/badges/check-it-out.svg"> 

[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTUuMjEiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxOTUuMjEgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMTUuMzEiIGhlaWdodD0iMzUiIGZpbGw9IiNFRDAwMjciLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMTMuMzEiIHk9IjAiIHdpZHRoPSI4MS45IiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzg5QUQ1Ii8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTE1LjY5IDIyTDE0LjIyIDIyTDE0LjIyIDEzLjQ3TDE2LjE0IDEzLjQ3TDE4LjYwIDIwLjAxTDIxLjA2IDEzLjQ3TDIyLjk3IDEzLjQ3TDIyLjk3IDIyTDIxLjQ5IDIyTDIxLjQ5IDE5LjE5TDIxLjY0IDE1LjQzTDE5LjEyIDIyTDE4LjA2IDIyTDE1LjU1IDE1LjQzTDE1LjY5IDE5LjE5TDE1LjY5IDIyWk0yOC40OSAyMkwyNi45NSAyMkwzMC4xNyAxMy40N0wzMS41MCAxMy40N0wzNC43MyAyMkwzMy4xOCAyMkwzMi40OSAyMC4wMUwyOS4xOCAyMC4wMUwyOC40OSAyMlpNMzAuODMgMTUuMjhMMjkuNjAgMTguODJMMzIuMDcgMTguODJMMzAuODMgMTUuMjhaTTQxLjE0IDIyTDM4LjY5IDIyTDM4LjY5IDEzLjQ3TDQxLjIxIDEzLjQ3UTQyLjM0IDEzLjQ3IDQzLjIxIDEzLjk3UTQ0LjA5IDE0LjQ4IDQ0LjU3IDE1LjQwUTQ1LjA1IDE2LjMzIDQ1LjA1IDE3LjUyTDQ1LjA1IDE3LjUyTDQ1LjA1IDE3Ljk1UTQ1LjA1IDE5LjE2IDQ0LjU3IDIwLjA4UTQ0LjA4IDIxLjAwIDQzLjE5IDIxLjUwUTQyLjMwIDIyIDQxLjE0IDIyTDQxLjE0IDIyWk00MC4xNyAxNC42Nkw0MC4xNyAyMC44Mkw0MS4xNCAyMC44MlE0Mi4zMCAyMC44MiA0Mi45MyAyMC4wOVE0My41NSAxOS4zNiA0My41NiAxNy45OUw0My41NiAxNy45OUw0My41NiAxNy41MlE0My41NiAxNi4xMyA0Mi45NiAxNS40MFE0Mi4zNSAxNC42NiA0MS4yMSAxNC42Nkw0MS4yMSAxNC42Nkw0MC4xNyAxNC42NlpNNTUuMDkgMjJMNDkuNTEgMjJMNDkuNTEgMTMuNDdMNTUuMDUgMTMuNDdMNTUuMDUgMTQuNjZMNTEuMDAgMTQuNjZMNTEuMDAgMTcuMDJMNTQuNTAgMTcuMDJMNTQuNTAgMTguMTlMNTEuMDAgMTguMTlMNTEuMDAgMjAuODJMNTUuMDkgMjAuODJMNTUuMDkgMjJaTTY2LjY1IDIyTDY0LjY4IDEzLjQ3TDY2LjE1IDEzLjQ3TDY3LjQ3IDE5Ljg4TDY5LjEwIDEzLjQ3TDcwLjM0IDEzLjQ3TDcxLjk2IDE5Ljg5TDczLjI3IDEzLjQ3TDc0Ljc0IDEzLjQ3TDcyLjc3IDIyTDcxLjM1IDIyTDY5LjczIDE1Ljc3TDY4LjA3IDIyTDY2LjY1IDIyWk04MC4zOCAyMkw3OC45MCAyMkw3OC45MCAxMy40N0w4MC4zOCAxMy40N0w4MC4zOCAyMlpNODYuODcgMTQuNjZMODQuMjMgMTQuNjZMODQuMjMgMTMuNDdMOTEuMDAgMTMuNDdMOTEuMDAgMTQuNjZMODguMzQgMTQuNjZMODguMzQgMjJMODYuODcgMjJMODYuODcgMTQuNjZaTTk2LjI0IDIyTDk0Ljc1IDIyTDk0Ljc1IDEzLjQ3TDk2LjI0IDEzLjQ3TDk2LjI0IDE3LjAyTDEwMC4wNSAxNy4wMkwxMDAuMDUgMTMuNDdMMTAxLjUzIDEzLjQ3TDEwMS41MyAyMkwxMDAuMDUgMjJMMTAwLjA1IDE4LjIxTDk2LjI0IDE4LjIxTDk2LjI0IDIyWiIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGNsYXNzPSJzdmdfX3RleHQiIGQ9Ik0xMjkuODggMjJMMTI3LjUwIDIyTDEyNy41MCAxMy42MEwxMzEuMzQgMTMuNjBRMTMyLjQ4IDEzLjYwIDEzMy4zMiAxMy45OFExMzQuMTYgMTQuMzUgMTM0LjYyIDE1LjA2UTEzNS4wNyAxNS43NiAxMzUuMDcgMTYuNzFMMTM1LjA3IDE2LjcxUTEzNS4wNyAxNy42MiAxMzQuNjUgMTguMzBRMTM0LjIyIDE4Ljk4IDEzMy40MyAxOS4zNkwxMzMuNDMgMTkuMzZMMTM1LjI0IDIyTDEzMi43MCAyMkwxMzEuMTcgMTkuNzdMMTI5Ljg4IDE5Ljc3TDEyOS44OCAyMlpNMTI5Ljg4IDE1LjQ3TDEyOS44OCAxNy45M0wxMzEuMjAgMTcuOTNRMTMxLjkzIDE3LjkzIDEzMi4zMCAxNy42MVExMzIuNjcgMTcuMjkgMTMyLjY3IDE2LjcxTDEzMi42NyAxNi43MVExMzIuNjcgMTYuMTIgMTMyLjMwIDE1Ljc5UTEzMS45MyAxNS40NyAxMzEuMjAgMTUuNDdMMTMxLjIwIDE1LjQ3TDEyOS44OCAxNS40N1pNMTQ2LjYxIDIyTDEzOS44NiAyMkwxMzkuODYgMTMuNjBMMTQ2LjQ1IDEzLjYwTDE0Ni40NSAxNS40NEwxNDIuMjIgMTUuNDRMMTQyLjIyIDE2Ljg1TDE0NS45NSAxNi44NUwxNDUuOTUgMTguNjNMMTQyLjIyIDE4LjYzTDE0Mi4yMiAyMC4xN0wxNDYuNjEgMjAuMTdMMTQ2LjYxIDIyWk0xNTIuODMgMjJMMTUwLjQwIDIyTDE1NC4xMSAxMy42MEwxNTYuNDUgMTMuNjBMMTYwLjE3IDIyTDE1Ny43MCAyMkwxNTcuMDQgMjAuMzdMMTUzLjQ5IDIwLjM3TDE1Mi44MyAyMlpNMTU1LjI3IDE1LjkzTDE1NC4xOCAxOC42MUwxNTYuMzQgMTguNjFMMTU1LjI3IDE1LjkzWk0xNjMuOTAgMTcuODBMMTYzLjkwIDE3LjgwUTE2My45MCAxNi41NCAxNjQuNDkgMTUuNTRRMTY1LjA5IDE0LjU1IDE2Ni4xNCAxMy45OVExNjcuMjAgMTMuNDMgMTY4LjUxIDEzLjQzTDE2OC41MSAxMy40M1ExNjkuNjcgMTMuNDMgMTcwLjU5IDEzLjg0UTE3MS41MSAxNC4yNSAxNzIuMTMgMTUuMDJMMTcyLjEzIDE1LjAyTDE3MC42MiAxNi4zOVExNjkuODAgMTUuNDAgMTY4LjY0IDE1LjQwTDE2OC42NCAxNS40MFExNjcuOTUgMTUuNDAgMTY3LjQyIDE1LjcwUTE2Ni44OCAxNiAxNjYuNTkgMTYuNTRRMTY2LjI5IDE3LjA5IDE2Ni4yOSAxNy44MEwxNjYuMjkgMTcuODBRMTY2LjI5IDE4LjUxIDE2Ni41OSAxOS4wNVExNjYuODggMTkuNjAgMTY3LjQyIDE5LjkwUTE2Ny45NSAyMC4yMCAxNjguNjQgMjAuMjBMMTY4LjY0IDIwLjIwUTE2OS44MCAyMC4yMCAxNzAuNjIgMTkuMjJMMTcwLjYyIDE5LjIyTDE3Mi4xMyAyMC41OFExNzEuNTIgMjEuMzUgMTcwLjU5IDIxLjc2UTE2OS42NyAyMi4xNyAxNjguNTEgMjIuMTdMMTY4LjUxIDIyLjE3UTE2Ny4yMCAyMi4xNyAxNjYuMTQgMjEuNjFRMTY1LjA5IDIxLjA1IDE2NC40OSAyMC4wNVExNjMuOTAgMTkuMDYgMTYzLjkwIDE3LjgwWk0xNzguNDYgMTUuNDhMMTc1Ljg3IDE1LjQ4TDE3NS44NyAxMy42MEwxODMuNDAgMTMuNjBMMTgzLjQwIDE1LjQ4TDE4MC44MyAxNS40OEwxODAuODMgMjJMMTc4LjQ2IDIyTDE3OC40NiAxNS40OFoiIGZpbGw9IiNGRkZGRkYiIHg9IjEyNi4zMSIvPjwvc3ZnPg==)](https://forthebadge.com)


<!-- ABOUT THE PROJECT -->
## About The Project  👀


A platform which connects student community and companies fulfilling their respective needs. Students will get personalized mail for every job matching to their skills and Companies have the assurance that their job post is being notified to every potential candidate. Not only mails but also a platform where every student can look out job posted by companies. Also a great interpretation of stats of trending and most relevant skills one should have.

App Features :
* It gives assurance to the company that their job posts are reaching every potential candidate in just a SINGLE-CLICK of a button
* Personalised mail whenever any posted job requirement matches your skills.
* No need to login and check every other day for jobs which they usually do , rather focus on their own skills. Thus, saving the precious time of a Student. 
* Our stats section gives you a perfect insight of most trending and demanding skills so as to upskill you and make yourself industry ready candidate.


### Built Using 🔧

* [React js](https://reactjs.org/)
* [Firebase](https://firebase.google.com/)
* [Node](https://nodejs.org/en/)
* [Heroku](https://www.heroku.com/)
* RestFul Api



<!-- GETTING STARTED -->
## Getting Started ⚡

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites 💡

These are the dependencies you will need for the project and how to import them.
* Node installation is required
  

### Installation ⏬


1. Clone the repo
   sh
   git clone https://github.com/Himanshuranjan848/job-o-mania.git



<!-- CONTRIBUTING -->
## Contributing 🤝

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are *greatly appreciated*.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License 🛠

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Members ✉️

* Yash Kumar
* Himanshu Ranjan
* Shubham Singh
 
Project Link: [Here](https://job-o-mania.web.app/)
<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements 🙂
