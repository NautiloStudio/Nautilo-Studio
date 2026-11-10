import CountUp from "./CountUp";

// Turns "{4} free guides" into text with a number that counts up when it scrolls into view.
export function withCounts(template: string) {
  return template.split(/(\{\d+\})/).map((part, index) => {
    const match = part.match(/^\{(\d+)\}$/);
    return match ? <CountUp key={index} to={Number(match[1])} /> : part;
  });
}
