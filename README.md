# Welcome to my Trivia

## The Basics

================

A react app utilizing the Tabs UI pattern. API providing the trivia is brought you by [Open Trivia Database](https://github.com/opentdb.com/api_config.php).

I decided to make this app as a way to help up my trivia knowledle, especially given trivia nights at bars are great!

---

## Getting Started

========================

### Installation

1. First jump into your terminal and make sure to have Node Package Manager Installed (NPM)

```
npm install npm@latest -g
```

2. Clone the repo in your desired folder

```
git clone https://github.com/MannyNR/Trivia-with-react.git
```

3. Jump into the folder

```
cd Trivia-with-react
```

4. Install NPM packages

```
npm install
```

4. Run the app

```
npm start
```

---

## View of the homepage

=================================

Simple landing page, opted to make an array like tab navigation bar instead of the traditional ones we see a lot of online.

![alt text](./public/Home.png "View of the homepage")

### View of a mutilple choice question without revealing the answer

Once a category is selected you will notice the NavLink will switch active class from Home to the selected choice. We will also see the api call return a question from the category and the "Show Answer" and "Next Question" buttons will appear under the question.

![alt text](./public/MultNoAns.png "View of a mutilple choice question without revealing the answer")

---

### True or false question with answer after show answer was pressed

Once Show answer is pressed you will see it load the answer under the question. It is a toggle button so if you want to quiz someone with the same question you can click on it again to hide the answer.

![alt text](./public/TFAns.png "True or false question with answer after show answer was pressed")

If you press next question it will provide you the next random question from the api without changing the category and even if the answe is shown on the previous question, the new one wont show the answer until the button is clicked.
![alt text](./public/TFAns.png "True or false question with answer after show answer was pressed")

---

## MVP but future plans

=================================

### I would like to continue working on this by adding more categories and perhaps make it into an actual trivia game. The api also has some weird encoding issues that provide some error with special characters like ( & ' "). This is something I couldnt fix given the Json itself has the issue as well and the other encoding options they provide didn't work any better.

---

## Thank you for checking this repo out and please let me know if you would like to see a feature added!
