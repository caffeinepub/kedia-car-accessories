import { Mail, Instagram, Star, MapPin, Car, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
        <div className="container flex h-20 items-center justify-center">
          <div className="flex items-center gap-3">
            <Car className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
              KEDIA CAR ACCESSORIES
            </h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-black to-background">
        <div className="absolute inset-0 bg-[url('/assets/generated/kedia-hero.dim_1600x900.png')] bg-cover bg-center opacity-20" />
        <div className="container relative py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Premium Car Accessories in Korba
            </h2>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              Seat Covers | LED Lights | Music Systems | Car Decoration | Car Care Products
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="mailto:kediaacc@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a
                  href="https://instagram.com/kediacaraccessories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="mr-2 h-5 w-5" />
                  Follow on Instagram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="border-b border-border/40 bg-accent/20 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-2">
              <Star className="h-8 w-8 fill-amber-500 text-amber-500" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Customer Reviews
              </h2>
            </div>
            <p className="mb-8 text-lg text-muted-foreground">
              Love our service? Please leave a Google Review!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-amber-500 text-black hover:bg-amber-600"
            >
              <a
                href="https://maps.app.goo.gl/TkMaKv9cUV83vhFXA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Star className="mr-2 h-5 w-5" />
                Leave Google Review
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Visit Our Store Section */}
      <section className="border-b border-border/40 py-16 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center justify-center gap-2">
              <MapPin className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Visit Our Store
              </h2>
            </div>
            <Card className="overflow-hidden border-border/40 bg-card">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8447!2d82.6897!3d22.3497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a280b1b1b1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sKedia%20Car%20Accessories!5e0!3m2!1sen!2sin!4v1234567890"
                  className="h-[300px] w-full border-0 md:h-[450px]"
                  loading="lazy"
                  title="Kedia Car Accessories Location"
                />
                <div className="flex justify-center border-t border-border/40 bg-card p-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <a
                      href="https://maps.app.goo.gl/TkMaKv9cUV83vhFXA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MapPin className="mr-2 h-5 w-5" />
                      Open in Google Maps
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-b border-border/40 py-16 md:py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl">
            Our Work Gallery
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="group overflow-hidden border-border/40 bg-card transition-all hover:border-primary/50">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="/assets/generated/kedia-gallery-1.dim_1200x800.png"
                    alt="Car Accessories"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-border/40 bg-card transition-all hover:border-primary/50">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="/assets/generated/kedia-gallery-2.dim_1200x800.png"
                    alt="Car LED Setup"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
            <Card className="group overflow-hidden border-border/40 bg-card transition-all hover:border-primary/50">
              <CardContent className="p-0">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img
                    src="/assets/generated/kedia-gallery-3.dim_1200x800.png"
                    alt="Seat Covers"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-sm text-muted-foreground">
        <div className="container">
          <p className="mb-2">
            © {new Date().getFullYear()} Kedia Car Accessories | Korba CG
          </p>
          <p className="mb-2">
            Contact:{' '}
            <a
              href="mailto:kediaacc@gmail.com"
              className="text-primary hover:underline"
            >
              kediaacc@gmail.com
            </a>
          </p>
          <p className="mb-4">
            Instagram:{' '}
            <a
              href="https://instagram.com/kediacaraccessories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @kediacaraccessories
            </a>
          </p>
          <p className="text-xs">
            Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined'
                  ? window.location.hostname
                  : 'kedia-car-accessories'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
