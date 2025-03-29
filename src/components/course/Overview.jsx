const Overview = ({ courseOverview }) => {
  return (
    <section className="bg-ice">
      <div className="m-auto max-w-5xl  px-4 py-10 md:py-16">
        <h2 className="mb-7 text-2xl font-semibold md:text-32px">Course Overview</h2>

        <div
          dangerouslySetInnerHTML={{ __html: courseOverview.bundle_overview }}
          className="prose prose-blue"
        />
      </div>
    </section>
  );
};

export default Overview;
