const Overview = ({ courseOverview }) => {
  return (
    <section>
      <div className="max-w-7xl py-4 md:py-8">
        <h2 className="mb-7 text-2xl font-semibold md:text-32px">Description</h2>

        <div
          dangerouslySetInnerHTML={{ __html: courseOverview.bundle_overview }}
          className="prose prose-blue"
        />
      </div>
    </section>
  );
};

export default Overview;
