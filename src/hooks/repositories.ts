export const getRepositories = async (): Promise<Repository[]> => {
  const response = await fetch(
    "https://api.github.com/users/leandrordg/repos?sort=updated&per_page=5"
  );
  return await response.json();
};

export const getLanguagesFromRepository = async (name: string) => {
  const response = await fetch(
    `https://api.github.com/repos/leandrordg/${name}/languages`
  );
  return await response.json();
};

export const getImageFromRepository = async (name: string) => {
  const response = await fetch(
    `https://raw.githubusercontent.com/leandrordg/${name}/master/public/background1.png`
  );

  return response.ok
    ? `https://raw.githubusercontent.com/leandrordg/${name}/master/public/background1.png`
    : "/images/image-not-found.png";
};
