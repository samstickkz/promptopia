import Feed from "@components/Feed";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center ">
        Discover and share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai-powered prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is a platform for ddiscovering and sharing Ai-powered
        prompts.iscovering and sharing Ai-powered prompts.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
