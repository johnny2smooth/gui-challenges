export default function Breadcrumbs() {
  return (
    <>
      <h2 className="text-4xl">1. Breadcrumbs</h2>
      <MainBreadcrumb />
      <p>What is it and why is it important?</p>
      <p className="max-w-prose">
        A breadcrumbs component shows where in the site hierarchy the user is.
        The name is from Hansel and Gretel, who dropped breadcrumbs behind them
        in some dark woods and were able to find their way home by tracing
        crumbs backwards.
      </p>
    </>
  );
}

const MainBreadcrumb = () => {
  return (
    <>
      <nav className="flex gap-4" role="navigation">
        <a href="/" className="flex gap-2">
          <span>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <use href="#icon-home" />
            </svg>
          </span>
          <span className="home-label">Home</span>
        </a>

        <span className="crumb-separator" aria-hidden="true">
          »
        </span>

        <span className="flex">
          <a aria-current="page">Previous Page</a>
          <span className="flex">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <use href="#icon-dropdown-arrow" />
            </svg>
          </span>
        </span>

        <span className="crumb-separator" aria-hidden="true">
          »
        </span>

        <span className="flex">
          <a aria-current="page">Current Page</a>
          <span className="flex">
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <use href="#icon-dropdown-arrow" />
            </svg>
          </span>
        </span>
      </nav>

      <svg style={{ display: "none" }}>
        <symbol id="icon-home">
          <title>A home icon</title>
          <path
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            stroke="white"
            stroke-opacity="1"
          />
        </symbol>

        <symbol id="icon-dropdown-arrow">
          <title>A down arrow</title>
          <path d="M19 9l-7 7-7-7" stroke="white" stroke-opacity="0.9" />
        </symbol>
      </svg>
    </>
  );
};
