
export type GitHubContributor = {
  login: string;
  avatar_url: string;
  html_url: string;
}

type GitHubAPIResponseContributors = GitHubContributor[];

/**
 * This function does not require authentication
 * @param profileURL - The URL of the GitHub profile to fetch data for
 * @returns
 */
export function getContributor(profileURL: string): GitHubContributor {
  const login = profileURL.split("/")[3]
  if (!login) {
    throw new Error(`Could not parse GitHub login from profile URL: ${profileURL}`);
  }
  return {
    login,
    avatar_url: `${profileURL}.png`,
    html_url: profileURL,
  };
}

/**
 * Fetches all contributors to the repository
 * Without authentication, this will be rate limited
 */
export async function getContributors(gh_slug: string, token?: string) {
  const contributorsURL =
    `https://api.github.com/repos/${gh_slug}/contributors`;
  let headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  // Only add Authorization header if a token is provided
  if (token) {
    headers["Authorization"] = `token ${token}`;
  }
  const response = await fetch(contributorsURL, { headers });
  if (!response.ok) {
    throw new Error(
      `Could not fetch contributors from GitHub API: ${response.statusText}`
    );
  }
  try {
    const contributors: GitHubAPIResponseContributors = await response.json();
    return contributors.map((contributor) => {
      return {
        login: contributor.login,
        avatar_url: contributor.avatar_url,
        html_url: contributor.html_url,
      };
    });
  } catch (error) {
    throw new Error(`Could not parse contributors from GitHub API: ${error}`);
  }
}
