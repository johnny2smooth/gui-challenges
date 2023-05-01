export default function Breadcrumbs() {
  return (
    <div className="max-w-prose stack">
      <h2 className="text-4xl">1. Breadcrumbs</h2>
      <BreadcrumbExample path="www.localhost.3000/lets/learn/breadcrumbs" />
      <p>What is it and why is it important?</p>
      <p className="max-w-prose">
        A breadcrumbs component shows where in the site hierarchy the user is.
        The name is from Hansel and Gretel, who dropped breadcrumbs behind them
        in some dark woods and were able to find their way home by tracing
        crumbs backwards.
      </p>
      <p className="max-w-prose">
        Let&apos;s say that we are currently at our home page on our website. We
        are at <code>www.localhost.3000</code>. We wouldn&apos;t really need a
        breadcrumb here. We are already home. We do not want to make a mess for
        ourselves with breadcrumbs all over the place in our own home.
      </p>
      <p className="max-w-prose">
        Let us navigate to:{" "}
        <code>www.localhost.3000/friends/new-friends/danny/bio</code>
      </p>
      <p className="max-w-prose">
        A trail of breadcrumbs would be nice right about now so that we could
        easily navigate to another friend. If we built everything right, the
        trail of crumbs would look like:
      </p>
      <BreadcrumbExample path="www.localhost.3000/friends/new-friends/danny/bio" />
      <p>
        To achieve this, I am getting my URL string, splitting the URL into
        segments with <code>split(&apos;/&apos;)</code>, and looping through
        that array. I am also skipping over the first element in the array,
        which I know is home. If this was not an example, I would handle each
        segment as a <code>&lt;Link /&gt;</code> and pipe through the URL
        segements depending on which index of the array I was on.
      </p>
      <p>
        This is about as far as I want to go with this component for now. This
        is the normal use case. An abnormal use case would be to give the user
        the ability to select a friend from the list of all available. The UX
        sounds great, but that is a little out of the scope for now.
      </p>
    </div>
  );
}

const BreadcrumbExample = ({ path = "", selectable = false }) => {
  const crumbs = path.split("/").slice(1);
  return (
    <>
      <nav className="flex gap-4" role="navigation">
        <a href="/" className="flex gap-2">
          <span>
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
              <use href="#icon-home" />
            </svg>
          </span>
          <span className="home-label underline underline-offset-2">Home</span>
        </a>
        {crumbs.map((location) => {
          return (
            <>
              <span className="crumb-separator" aria-hidden="true">
                »
              </span>
              <span className="flex">
                <a aria-current="page" className="underline underline-offset-2">
                  {location}
                </a>
                {selectable && (
                  <span className="flex">
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      aria-hidden="true"
                    >
                      <use href="#icon-dropdown-arrow" />
                    </svg>
                  </span>
                )}
              </span>
            </>
          );
        })}
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
