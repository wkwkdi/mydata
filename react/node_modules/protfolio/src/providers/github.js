const Provider = require("./Provider");
const rp = require("request-promise");
const remap = require("object-remap");

const API_BASE_URL = "https://api.github.com";
const PER_PAGE = 500;

const fields = [
  "id",
  "name",
  "full_name",
  "html_url",
  "description",
  "fork",
  "url",
  "keys_url",
  "collaborators_url",
  "teams_url",
  "created_at",
  "updated_at",
  "git_url",
  "ssh_url",
  "clone_url",
  "homepage",
  "stargazers_count",
  "watchers_count",
  "language",
  "has_issues",
  "has_downloads",
  "forks_count",
  "archived",
  "disabled",
  "open_issues_count",
  "license",
  "forks",
  "open_issues",
  "watchers"
];

const fetchGithubData = async (username, options) => {
  let repos = [];
  let fetchedRepos = [];
  let page = 1;
  do {
    const options = {
      uri: `${API_BASE_URL}/users/${username}/repos`,
      qs: {
        per_page: PER_PAGE,
        page: page++
      },
      headers: {
        "User-Agent": username
      },
      json: true
    };

    fetchedRepos = await rp(options);

    repos = [...repos, ...fetchedRepos];
  } while (fetchedRepos.length == PER_PAGE);

  const user = await rp({
    uri: `${API_BASE_URL}/users/${username}`,
    headers: {
      "User-Agent": username
    },
    json: true
  });

  return {
    repositories: repos.map(r => remap(r, fields)),
    user
  };
};

class Github extends Provider {
  constructor(fetch) {
    super(fetch);
  }
}

const github = new Github(fetchGithubData);

module.exports = github;
