<p align="center">
  <a href="https://foodise.vercel.app">
    <img alt="Fiber" height="125" src="./src/images/logo.png">
  </a>
  <br>
  
<p align="center">
<b>foodise</b> is a marketplace that attempts to tackle growing food wastage and cut down on unnecessary food wastage. It is developed as part of <a href="https://lifehack.nuscomputing.com/">NUS LifeHack 2022</a>.
</p>

## ⚡️ Quickstart

To view a demo of the marketplace, you can visit our website [here]("https://foodise.vercel.app").

Alternatively, you can install a local version on your system by cloning the project and following the steps below

```sh
git clone https://github.com/nicholasohjj/foodise.git

cd ./<PROJECT_NAME>

npm install
npm start

```

## 🤖 Benchmarks

These tests are performed by [TechEmpower](https://www.techempower.com/benchmarks/#section=data-r19&hw=ph&test=plaintext) and [Go Web](https://github.com/smallnest/go-web-framework-benchmark). If you want to see all results, please visit our [Wiki](https://docs.gofiber.io/extra/benchmarks).

<p float="left" align="middle">
  <img src="https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark-pipeline.png" width="49%">
  <img src="https://raw.githubusercontent.com/gofiber/docs/master/.gitbook/assets/benchmark_alloc.png" width="49%">
</p>

## ⚙️ Installation

Make sure you have Go installed ([download](https://go.dev/dl/)). Version `1.14` or higher is required.

Initialize your project by creating a folder and then running `go mod init github.com/your/repo` ([learn more](https://go.dev/blog/using-go-modules)) inside the folder. Then install Fiber with the [`go get`](https://pkg.go.dev/cmd/go/#hdr-Add_dependencies_to_current_module_and_install_them) command:

```bash
go get -u github.com/gofiber/fiber/v2
```

## 🎯 Features

-   Stylised with Atomise UI
- Post and reserve listings of food and drinks you would like to share!
- Connect with like-minded individuals when you reserve a lising
## 💡 Philosophy

In 2019, Singapore generated around 744 million kg of food waste, accounting for 12% of total waste production in Singapore. 

foodise aims to encourage Singaporeans to make the **wise** decision of donating their **surplus food** instead of throwing them away by connecting donors and recipients through a website. By incorporating donations from both individuals and corporates, this allows to minimise the amount of food thrown and go beyond existing solutions.

We **listen** to our users in [issues](https://github.com/nicholasohjj/foodise/issues) _and all over the Internet_ to create a **fast**, **flexible** and **friendly**  platform for all.

## 👀 Tech Stack
- Frontend website is programmed with React and deployed via Vercel.
- Stylised with Atomise UI with authentication and user management provided by Clerk.dev. Atomise handles HTTP requests to the backend.

- Backend is programmed with Express and mongoose, with data collected from listings stored via MongoDB. Backend repository can be found [here]("https://www.github.com/nicholasohjj/foodise-backend")

## ⚠️ Limitations
* Due to time constraints in developing foodise (approximately 24 hours), users may encounter glitches when uploading, deleting, or reserving listings displayed on the marketplace. These issues will not siginificantly impact user experience

                
## 👍 Contribute

If you want to say **thank you** and/or support the active development of `foodise`:

1. Add a [GitHub Star](https://github.com/nicholasohjj/foodise/stargazers) to the project.
2. Tweet about the project [on your Twitter](https://twitter.com/intent/tweet?text=Fiber%20is%20an%20Express%20inspired%20%23web%20%23framework%20built%20on%20top%20of%20Fasthttp%2C%20the%20fastest%20HTTP%20engine%20for%20%23Go.%20Designed%20to%20ease%20things%20up%20for%20%23fast%20development%20with%20zero%20memory%20allocation%20and%20%23performance%20in%20mind%20%F0%9F%9A%80%20https%3A%2F%2Fgithub.com%2Fgofiber%2Ffiber).
3. Write a review or tutorial on [Medium](https://medium.com/), [Dev.to](https://dev.to/) or personal blog.

