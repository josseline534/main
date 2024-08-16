export const goSection = (sectionName: string) => {
  const section = document.getElementById(sectionName)
  if (section)
    section.scrollIntoView({ behavior: 'smooth' })
}