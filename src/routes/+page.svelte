<script lang="ts">
</script>

<div class="hero col">
    <h1>Alex Agruso</h1>
    <h2>Developer, Designer,</h2>
    <h2 class="accent">Creator.</h2>
</div>
<div class="content col">
    <section class="col">
        <h1>Introduction</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore repudiandae exercitationem dolorum
            sapiente deleniti tenetur deserunt similique molestiae et rem, earum dolores beatae iusto molestias
            praesentium. Voluptatibus quas aspernatur ipsam officia, voluptatem reprehenderit corrupti dolores magni
            aperiam, cum dignissimos laboriosam. Eos excepturi cum sed ipsum quam mollitia praesentium atque accusantium
            officia, nobis deserunt iusto rem quo error quidem? Quibusdam veniam harum voluptatum optio labore
            accusantium architecto nesciunt libero aliquam nihil, laborum facilis! Sed sit odio accusamus commodi
            repellat nobis consequuntur blanditiis, ut molestiae. Omnis consequatur eum explicabo. Quidem ratione
            laudantium consequatur odit tempore dolorum fuga, id quaerat. Itaque, illo cum.
        </p>
    </section>

    <section class="col">
        <h1>Extra Content</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit corrupti, neque illum enim eveniet repellat
            porro inventore reiciendis, ea veniam provident possimus error cupiditate fuga vero reprehenderit, delectus
            tempore id? Ullam deleniti ipsa fugit perspiciatis amet quibusdam, non corporis totam odio assumenda dolor
            id rem perferendis vitae. Fugiat, dolorem nostrum quasi sed corporis consequuntur rerum quaerat dolor?
            Veritatis earum officia eos sit similique saepe in laborum sunt, at, vero et error doloribus quasi. Facere
            ad, aliquam facilis excepturi laboriosam nostrum adipisci minima nobis suscipit eos molestias dolorum
            quaerat neque mollitia nisi dolorem esse inventore autem temporibus a? Voluptatum, porro quo.
        </p>
    </section>
</div>

<style lang="scss">
    .hero {
        h1,
        h2 {
            font-weight: 400;
            color: $white;
        }

        h2 {
            font-weight: 400;
            color: $white;
        }

        h1 {
            font-size: 8rem;
        }

        h2 {
            font-size: 6rem;

            &.accent {
                color: $accent;
            }
        }

        justify-content: center;

        padding: 0 20rem;
        width: 100%;
        min-height: 100vh;

        background: linear-gradient(282deg, $primary 0%, $black 100%);
    }

    .content {
        gap: 8rem;

        align-items: center;

        padding: 8rem 0;

        section {
            align-items: center;
            gap: 4rem;

            max-width: 50%;
        }

        h1 {
            font-size: 4rem;
        }

        p {
            font-size: 1.5rem;
        }
    }
</style>
