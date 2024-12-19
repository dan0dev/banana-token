export default function About() {
  return (
    <section className="w-full px-4 -mt-10">
      <div className="max-w-[1800px] mx-auto bg-[#ffe692] rounded-2xl relative overflow-hidden border border-b-4 border-r-4 border-black">
        <div className="px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center bevellier4 tracking-wider text-gray-900">
              About $BANANA
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <p className="text-xl text-gray-800 bevellier2">
                  $BANANA is more than just another meme coin - it&apos;s a
                  community-driven movement that combines the fun of memes with
                  the innovation of cryptocurrency.
                </p>
                <p className="text-xl text-gray-800 bevellier2">
                  Our mission is to create a vibrant ecosystem where humor meets
                  value, and where every holder becomes part of something bigger
                  than just a digital asset.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-800 bevellier2">
                  With strong tokenomics, an engaged community, and a commitment
                  to transparency, $BANANA is setting new standards in the meme
                  coin space.
                </p>
                <p className="text-xl text-gray-800 bevellier2">
                  Join us as we peel back the layers of traditional crypto and
                  create something truly appealing!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
