import { Fragment, useState } from "react";
import BlogPopup from "./popup/BlogPopup";

const blogData = [
  {
    title: "Work Smart Not Fast - 5 tips to work smarter",
    date: "10 October, 2022",
    author: "Emmanuel Tolani",
    img: "img/news/smart-work.png",
    description: [
      "I’ve been spending too many hours debugging my code. It’s usually a stupid typo or a hidden symbol somewhere. And then it’s tempting to start over and do it all again, just to get rid of the error. But I’ve realized it’s not that efficient.",
      "I’d like to share my best strategies so far:",
      "1. To code and debug methodically and systematically. When debugging it’s harder to be structured if you’re frustrated. Try to be patient and rule out one thing at a time and have focus on what you’re doing.",
      "2. Take regular breaks. Especially if you’re stuck and have been banging your head against the wall for a while. Go for a walk, get some fresh air or have a snack. Sometimes it’s even necessary to call it a day. Fresh eyes will see new solutions and you will waste less hours debugging.",
      "3. Use the INSPECTOR (Chrome DevTools) It’s my favourite tool to use when styling and to get an overview of how the elements are put together. It lets you quickly preview what the colors, margins, paddings, etc. is going to look like, so you don’t need to skip back and forth between your code program and the browser.",
      "4. Use the “replace” in VSCode. It’s a simple way for finding and replacing all the strings that you want to change. Picking “replace all” changes all matches with one click, instead of risking missing one when doing it manually.",
      "5. Don’t be afraid to use other tools that help you code efficiently and helps identify errors. For example, the extension Auto Rename Tag changes the closing tag simultaneously as you’re changing the opening tag. Code Spell Checker is another extension that prevents you from doing typos."
    ],
  },
  {
    title: "Web Application Security Basics 101: where to start",
    date: "28 October, 2022",
    author: "Emmanuel Tolani",
    img: "img/news/owasp.png",
    description: [
      "Common Web Application Vulnerabilities",
      "The OWASP Top 10 is a comprehensive list of vulnerabilities that require immediate resolution in any software. So, where you should start strengthening your web application. Existing code should be checked for these vulnerabilities immediately as attackers are actively targeting such flaws.",
      "Development projects should check for these vulnerabilities in their design documents and test the code in the development phase as well. Testing ensures that no vulnerabilities have been introduced and those that existed have been removed.",
      "Supervisors should make room in their budget and timeline for security activities like training software producers, developing a secure development policy, secure design and development mechanisms, penetration testing, and security review of the source code.",
      "How to secure a website",
      "SQL Injection",
      "SQL Injection is a web attack involving malicious SQL statements. With a successful SQL attack, a hacker can access your website’s SQL database to copy, add, edit or delete the data it contains. SQL injection is the most common web security vulnerability as most websites use an SQL database.",
      "You can handle SQL injection by being cautious of user input. It is ideal not to rely on any user input. Make sure all user input is validated before allowing it on your site.",
      "Broken authentication",
      "Broken authentication has to do with various web vulnerabilities. However, they all involve bypassing authentication methods presented on websites. Most broken authentication attacks involve credential padding, improper session timeouts, and unsalted and hashed passwords. It allows attackers to bypass authentication and impersonate legitimate users.",
      "Multifactor authentication is one of the best ways to deal with broken authentication attacks. Therefore, knowing a user’s credentials — username and password — will not be enough to access their account. Also, user passwords stored in your database should not only be encrypted but salted and hashed.",
      "Cross-Site Scripting",
      "Also known as XSS attacks, this is a web vulnerability that has to do with client-side code injection. Typically, the attack inserts malicious code into a webpage that will be executed as soon as the webpage is visited. It is an input vulnerability and primarily occurs on websites that allow user feedback.",
      "Incorrect security configuration",
      "Security misconfiguration is relatively easy to fix. First, you need to understand how your site works, choose the best security measures for your site, and ensure that everything is implemented correctly. Use strong administrator passwords and block unauthorized access to your server. Occasionally run scans to detect and fix any security holes.",
      "Insecure Direct Object References (IDOR)",
      "It will be difficult for an attacker to find an Insecure Direct Object Reference (IDOR) on your site. However, if they do, they can easily exploit it, and the consequences can be severe. This vulnerability involves unauthorized access using unvalidated user input. Hackers can reference objects on your web server directly.",
      "The first thing you can do is to detect IDOR and replace object references using secure hashes or indirect object references. Then ensure proper session management and always check object-level user access controls.",
      "Cross-site request forgery",
      "When a user visits a website, the browser automatically sends authentication tokens for each request. An attacker could use a malicious webpage to alter interactions between a user’s browser and the website being visited. For example, it allows them to gain access to the user’s previous authentication cookies for the website visited.",
      "Session authentication can help you handle cross-site request spoofing. It can be achieved by issuing tokens for each active user session to verify that it is the actual user sending requests to the site. It is known as token-based mitigation, and you can use stateful or stateless token patterns.",
      "Conclusion",
      "It is necessary to perform penetration tests periodically to ensure the security of your website. These tests assess the security from several angles: external, internal, blind, and targeted. In addition, these tests allow us to check situations that may happen for real, unlike a classic security audit, which focuses more on technical assessment.",
      "To automate good security practices, we can also integrate security into DevSecOps. In such a setup, those responsible for development and operations are also responsible for security. It involves, for example, the use of security diagnostic tools in the continuous integration process."
    ],
  },
];

const Blog = () => {
  const [activeData, setActiveData] = useState({});
  const [open, setOpen] = useState(false);
  const onClick = (blog) => {
    setOpen(true);
    setActiveData(blog);
  };
  return (
    <Fragment>
      <BlogPopup open={open} close={() => setOpen(false)} data={activeData} />
      <div className="orido_tm_section" id="blog">
        <div className="orido_tm_news">
          <div className="container">
            <div className="orido_tm_main_title">
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className="news_list">
              <ul>
                {blogData.map((blog, i) => (
                  <li key={i}>
                    <div className="list_inner">
                      <div className="left">
                        <div className="metabox">
                          <ul>
                            <li>
                              <span>
                                <a
                                  className="c-pointer"
                                  onClick={() => onClick(blog)}
                                >
                                  {blog.author}
                                </a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className="title">
                          <h3>
                            <a
                              className="c-pointer"
                              onClick={() => onClick(blog)}
                            >
                              {blog.title}
                            </a>
                          </h3>
                        </div>
                        <div className="orido_tm_simple_button">
                          <a
                            className="line_effect c-pointer"
                            onClick={() => onClick(blog)}
                          >
                            Read More{" "}
                            <img
                              className="svg"
                              src="img/svg/top-arrow.svg"
                              alt=""
                            />
                          </a>
                        </div>
                      </div>
                      <div className="right">
                        <img src="img/thumbs/24-20.jpg" alt="" />
                        <div
                          className="main"
                          data-img-url={blog.img}
                          style={{ backgroundImage: `url(${blog.img})` }}
                        />
                        <a
                          className="orido_tm_full_link c-pointer"
                          onClick={() => onClick(blog)}
                        />
                      </div>
                      <span className="shape">
                        <img
                          className="svg"
                          src="img/svg/Intersect.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Blog;
