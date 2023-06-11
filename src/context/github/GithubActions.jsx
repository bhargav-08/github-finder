import axios from 'axios'

const GITHUB_URL = import.meta.env.VITE_APP_GITHUB_URL
const GITHUB_TOKEN = import.meta.env.VITE_APP_GITHUB_TOKEN

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: `token ${GITHUB_TOKEN}` },
})

export const searchUsers = async (text) => {
  const params = new URLSearchParams({ q: text })

  const response = await github.get(`/search/users?${params}`)
  // This will update users and will make loading:false
  return response.data.items
}

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ])
  return { user: user.data, repos: repos.data }
}

// export const getRepos = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//     },
//   })
//   if (response.status === 404) {
//     window.location = '/notfound'
//   }
//   const data = await response.json()
//   // This will update users and will make loading:false

//   const repos = data.map((ele) => {
//     const obj = {
//       id: ele.id,
//       name: ele.name,
//       description: ele.description,
//       html_url: ele.html_url,
//       forks: ele.forks_count,
//       open_issues: ele.open_issues_count,
//       watchers_count: ele.watchers_count,
//       stargazers_count: ele.stargazers_count,
//     }
//     return obj
//   })

//   return repos
// }
