//components
import ResultsElement from "./resultsElement";

export default function Results() {
  return (
    <section className="w-full">
      <ul>
        <ResultsElement dateName="years" />
        <ResultsElement dateName="months" />
        <ResultsElement dateName="days" />
      </ul>
    </section>
  );
}
