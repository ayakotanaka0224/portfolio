const figmaContributes = async () => {
  const token = {
    "X-FIGMA-TOKEN": `294426-bd94f5d0-57ff-4964-9ea3-f8fdd705c149`,
  };
  const team = await fetch(
    `https://api.figma.com/v1/teams/765866379449217951/projects`,
    { headers: token }
  );
  const result = await team.json();
  const projects = await result.projects;
  const files = await Promise.all(
    projects.map(async (project) => {
      const response = await fetch(
        `https://api.figma.com/v1/projects/${project.id}/files`,
        { headers: token }
      );
      const result = await response.json();
      return result.files;
    })
  );
  const versions = await Promise.all(
    files.flat().map(async (file) => {
      const response = await fetch(
        `https://api.figma.com/v1/files/${file.key}/versions`,
        { headers: token }
      );
      const result = await response.json();
      return result.versions;
    })
  );

  const allVersions = versions.flat();
  const versionsCreatedAt = allVersions
    .flat()
    .map((content) => content.created_at.slice(0, 10));

  const days = 365;
  const today = new Date();
  const period = [...Array(days)].map(() =>
    new Intl.DateTimeFormat("sv-SE", { timeZone: "UTC" }).format(
      today.setDate(today.getDate() - 1)
    )
  );

  const concatedversionsCreatedAt = period.concat(versionsCreatedAt);
  const allContributes = [];
  concatedversionsCreatedAt.map(
    (versionCreatedAt) =>
      (allContributes[versionCreatedAt] = allContributes[versionCreatedAt]
        ? allContributes[versionCreatedAt] + 1
        : 1)
  );
  const contributes = Object.entries(allContributes)
    .sort()
    .slice(-days);
  const counter = [];
  contributes.map(([, value]) => counter.push(value - 1));
  // const max = Math.max(...counter);
  const obj = contributes.map((item) =>
    item.reduce(function(target, key, index) {
      const keys = ["day", "count"];
      target[keys[index]] = key;
      return target;
    }, {})
  );
  return obj;
};

export default figmaContributes;
