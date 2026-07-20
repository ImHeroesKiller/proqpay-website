import { Container } from "@/components/shared/container";
import { Statistic } from "@/components/shared/statistic";
import { proqpayProduct } from "@/lib/content/proqpay";

/** Optional stats band for ProQPay product surfaces only. */
export function StatsBand() {
  return (
    <section className="border-y border-border bg-navy-dark py-14 text-white">
      <Container>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {proqpayProduct.stats.map((stat) => (
            <div key={stat.label} className="[&_*]:text-white [&_p]:text-white/70">
              <Statistic
                value={stat.value}
                label={stat.label}
                prefix={stat.prefix}
                suffix={stat.suffix}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
