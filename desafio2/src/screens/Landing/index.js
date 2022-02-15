import * as S from './style';
import TapeImg0 from '../../assets/tape0.png';
import TapeImg1 from '../../assets/tape1.png';

export default function Landing() {
  return (
    <S.Landing>
      <S.FirstSection>
        <h1>
          Measuring
          <br />
          everything
        </h1>
        <img src={TapeImg0} />
      </S.FirstSection>
      <S.SecondSection>
        <div>
          <h1>
            We are Leader
            <br />
            in Measure Tapes
          </h1>
          <h2>
            There are 5x the
            <br />
            circumference of planet
            <br />
            earth in metric tapes.
          </h2>
        </div>
        <img src={TapeImg1} />
      </S.SecondSection>
    </S.Landing>
  );
}
