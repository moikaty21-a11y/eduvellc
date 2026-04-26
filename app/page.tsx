import Image from "next/image";

export const metadata = {
  title: "EduVel — Study in Belarus | $4,000 All-Inclusive Package",
  description: "EduVel helps Gambian students study in Belarus. $4,000 all-inclusive: tuition, visa, accommodation. Pay $1,000 to start.",
};

const waNumber = "375255091564";
const waText = encodeURIComponent("Hello! I'm from The Gambia and want to study in Belarus. Ready to start the $4,000 package. ");
const waHref = "https://wa.me/" + waNumber + "?text=" + waText;

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <Image 
              src="/images/logo.jpg" 
              alt="EduVel LLC Logo" 
              width={120} 
              height={40}
              className="rounded-xl"
            />
            <h1 className="text-4xl font-bold tracking-tight">EduVel LLC</h1>
          </div>
          <p className="mt-2 text-lg text-gray-600">
            Gambian-owned agency helping youth study in Belarus with Ease.
          </p>
          <div className="mt-4 inline-flex items-center rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
            2026 Intake Open
          </div>
        </header>

        <section className="mb-8 rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-bold text-blue-900">Study in Belarus – $4,000 All-Inclusive</h2>
          <p className="mt-2 text-blue-800">
            We partner with several accredited universities across Belarus to secure your admission directly.
          </p>
          
          <h3 className="mt-6 font-semibold text-blue-900">What’s Included in $4,000:</h3>
          <ul className="mt-3 grid md:grid-cols-2 gap-x-6 gap-y-1 text-sm text-blue-800 list-disc pl-5">
            <li>Tuition</li>
            <li>Visa processing</li>
            <li>Medical insurance</li>
            <li>Accommodation</li>
            <li>Residential permit</li>
            <li>Document translation &amp; notarization</li>
            <li>Medical exam</li>
            <li>9-month preparatory language course</li>
          </ul>

          <div className="mt-6 rounded-xl bg-white p-4">
            <h3 className="font-semibold">Payment:</h3>
            <p className="text-sm mt-1"><strong>$1,000 prepayment</strong> to start processing</p>
            <p className="text-sm"><strong>$3,000 balance</strong> upon arrival in Belarus</p>
          </div>

          <div className="mt-6 space-y-3">
            <a
              href={waHref}
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3 font-medium text-white shadow-sm hover:bg-blue-700 transition"
            >
              Start on WhatsApp
            </a>
            
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.instagram.com/eduvel_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-pink-200 bg-pink-50 px-5 py-3 font-medium text-pink-700 hover:bg-pink-100 transition"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@eduvel_llc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-gray-900 bg-gray-900 px-5 py-3 font-medium text-white hover:bg-black transition"
              >
                TikTok
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Popular Courses</h2>
          <p className="mt-2 text-sm text-gray-700">
            We help students get admitted to top programs across Belarusian universities:
          </p>
          <div className="mt-4 grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
            <div>
              <h3 className="font-medium">Medicine & Health</h3>
              <ul className="mt-1 list-disc pl-5 text-gray-700">
                <li>General Medicine (MBBS)</li>
                <li>Dentistry</li>
                <li>Pharmacy</li>
                <li>Nursing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Engineering & Tech</h3>
              <ul className="mt-1 list-disc pl-5 text-gray-700">
                <li>Computer Science</li>
                <li>Civil Engineering</li>
                <li>Mechanical Engineering</li>
                <li>Information Technology</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Business & Economics</h3>
              <ul className="mt-1 list-disc pl-5 text-gray-700">
                <li>Business Administration</li>
                <li>International Relations</li>
                <li>Economics</li>
                <li>Accounting</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium">Other Programs</h3>
              <ul className="mt-1 list-disc pl-5 text-gray-700">
                <li>Law</li>
                <li>Architecture</li>
                <li>Agriculture</li>
                <li>Russian Language Prep</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">How It Works</h2>
          <ol className="mt-4 space-y-3 list-decimal pl-5 text-sm">
            <li>We secure admission + draft your invitation letter, stamped by Belarusian immigration</li>
            <li>Since Belarus has no embassy in Gambia, you get your <strong>visa upon arrival</strong> at Minsk airport</li>
            <li>Includes a 9-month preparatory language course before your degree</li>
            <li><strong>Processing Time: 14 working days</strong></li>
          </ol>
        </section>

        <section className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">To Apply: Ages 17–24</h3>
            <ul className="mt-3 text-sm list-disc pl-5">
              <li>Passport</li>
              <li>WASSCE Results</li>
              <li>Transcript</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <div className="rounded-2xl border p-6 bg-green-50 border-green-200">
            <h3 className="font-semibold text-green-900">Payment Safety</h3>
            <p className="mt-2 text-sm text-green-800">
              Not comfortable with direct prepayment? Meet our Gambian representative back home and deposit into a dual-signature account. We advance the payment here for you. Funds are only released once your admission is fully secured.
            </p>
          </div>
        </section>

        <section className="mb-8 rounded-2xl border p-6">
          <p className="text-sm text-gray-700">
            <strong>Eduvel LLC is fully registered in Belarus and Gambian-owned</strong>, founded with one purpose: to provide Gambian youth reliable access to higher education abroad with transparent, end -to-end guidance.
          </p>
        </section>

        <footer className="mt-12 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} EduVel LLC</p>
          <p className="mt-1">EduVel LLC, УНП 791363579, Belarus. Official education consultancy.</p>
        </footer>
      </div>
    </main>
  );
}