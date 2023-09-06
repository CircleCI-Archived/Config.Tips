export function getContributor(profileURL: string) {
  const username = profileURL.split("/")[3];
  return {
    username,
    avatarURL: `https://github.com/${username}.png`,
    profileURL,
  };
}