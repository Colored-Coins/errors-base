module.exports = `body {
  margin: 0;
  padding: 80px 100px;
  font: 13px "Helvetica Neue", "Lucida Grande", "Arial";
  background: #ECE9E9 -webkit-gradient(linear, 0% 0%, 0% 100%, from(#fff), to(#ECE9E9));
  background: #ECE9E9 -moz-linear-gradient(top, #fff, #ECE9E9);
  background-repeat: no-repeat;
  color: #555;
  -webkit-font-smoothing: antialiased;
}
h1, h2, h3 {
  margin: 0;
  font-size: 22px;
  color: #343434;
}
h1 em, h2 em {
  padding: 0 5px;
  font-weight: normal;
}
h1 {
  font-size: 60px;
}
h2 {
    margin-top: 10px;
}
h3 {
  margin: 5px 0 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  margin: 5px 0;
  padding: 3px 8px;
  list-style: none;
}
ul li:hover {
  cursor: pointer;
  color: #2e2e2e;
}
ul li .path {
  padding-left: 5px;
  font-weight: bold;
}
ul li .line {
  padding-right: 5px;
  font-style: italic;
}
ul li:first-child .path {
  padding-left: 0;
}
p {
  line-height: 1.5;
}
a {
  color: #555;
  text-decoration: none;
}
a:hover {
  color: #303030;
}
#stacktrace {
    margin-top: 15px;
}`