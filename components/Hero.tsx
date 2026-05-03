import Image from "next/image";
import Button from "./Button";

export default function Hero({ data }: { data?: any }) {
  console.log(data);

  const title = data?.title || "";
  const subtitle = data?.subtitle || "";

  const buttons = data?.buttons || [];

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="bg-image absolute w-full h-full top-0 left-0 overflow-hidden z-0">
        <Image
          src="/wolf_eyes.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-ful"
          priority
        />
      </div>
      <div className="container">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-none mb-8 whitespace-pre-line [&_span]:text-violet-500"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {buttons.map((btnItem: any, i: number) => {
              const btn = btnItem?.button;
              if (!btn?.buttonText) return null;

              const variant = (typeof btn.buttonStyle === 'string' ? btn.buttonStyle.toLowerCase() : null) || (i === 0 ? "primary" : "secondary");

              return (
                <Button
                  key={i}
                  href={btn.url || "#"}
                  variant={variant as "primary" | "secondary" | "link"}
                >
                  {btn.buttonText}
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
