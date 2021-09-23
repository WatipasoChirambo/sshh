import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Why from "../public/why.svg";
import relax from "../public/relax.svg";
import Hero from "../pages/components/hero";
import Carousel from "../pages/components/Carousel";

export default function Home() {
  const route = useRouter();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Hero />
        </div>
        <div className={styles.explore}>
          <h3 style={{ textAlign: "center" }}>
            About <span className="text-green-700">US </span>
          </h3>
          <div>
            <div className={styles.why_us}>
              <p>
                <span className="text-green-700">
                  WHY CHOOSE FIRST CAR HIRE AMONG OTHERS?<br></br>
                  <div style={{ textAlign: "center" }}>
                    <Image src={Why} alt="about us" />
                  </div>
                </span>{" "}
                Here at <span style={{ color: "#FEA501" }}>FIRST CAR HIRE</span>
                , we take pride in connecting people during their important
                events in life. After all, people don&apos;t just rent vehicles
                for transportation but also a means for accomplishing major
                tasks like working with local communities moving to a new house
                or office, attend special events, making your guests feel
                comfortable or to simply enjoy quality time with loved ones.
              </p>
              <p>
                <span style={{ color: "#FEA501" }}>
                  RELAX AND LET OUR DRIVERS DO THE DRIVING<br></br>
                  <div style={{ textAlign: "center" }}>
                    <Image
                      src={relax}
                      alt="Relax and let our drivers drive for you"
                    />
                  </div>
                </span>{" "}
                Long hour rides, traffic jams and broken road surfaces can lead
                to a stressful ride. Thus, we also offer drive around option.
                Our drivers are highly trained and are trustworthy. The company
                conducts drug tests annually to all drivers and trains them in
                Road Safety, Defensive Driving, and Customer Service to ensure a
                safe and comfortable travel. Also, our drivers have great
                knowledge about beautiful places in Malawi including where to
                shop and where to find local foods.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h4 style={{ textAlign: "center", color: "#FEA501" }}>
            Our Range Of Vehicles
          </h4>
          <div className={styles.our_vehicles}>
            <p>
              We offer a wide variety of vehicles to suit organizations needs
              and all individual needs, Whether an individual or an Organization
              needs a larger vehicle, such as four wheel drives or
              <b> 7-Seater </b>and<b> 16-Seater </b> passenger vehicle, we have
              the vehicles that are just right for you at very low competitive
              prices.
            </p>
            <p>
              We have in our fleet, among others,{" "}
              <b>
                Foton Micro-bus, Toyota Fortuners, Toyota Hillux double Cabin
              </b>{" "}
              and
              <b> Ford Everest</b>. All these vehicles are four wheel drives
              that are off-roaders to meet these needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
