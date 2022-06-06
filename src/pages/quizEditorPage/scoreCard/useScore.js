export function useScore(value, max) {
  const score = (value * 100) / max;

  let barColor;
  switch (true) {
    case score <= 25:
      barColor = "bg-red-400";
      break;

    case 25 < score && score <= 75:
      barColor = "bg-blue-400";
      break;

    case 75 < score && score <= 95:
      barColor = "bg-emerald-400";
      break;

    case 95 < score && score <= 100:
      barColor = "bg-yellow-400";
      break;

    default:
      barColor = "bg-gray-300";
      break;
  }

  return { score, barColor };
}
