import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['H', 'A', 'K', 'K', 'I', 'M', 'D', 'A']}
            idx={15}
          />
        </h1>
        <p>
          Merhaba Ben HTML5, CSS3, Bootstrap, Tailwind, Sass, Javascript, React,
          Redux, Redux-thunk, Redux-thunk-toolkit, Typscreet ile uygulamalar
          geliştiren bir Web Developer'ım.
        </p>
        <p>
          Kendime güveniyorum, doğal olarak meraklıyım ve sürekli olarak
          projelerimin üzerinde çalışıyorum web geliştirme becerilerimi sürekli
          olarak geliştiriyorum ve her bir sorunu çözerken kendimi daha iyi hale
          getirmeye odaklanıyorum.
        </p>
        <p>
          Kendimi tek bir kelime ile tanımlamam gerekirse bu aile olurdu.
          Ailemle vakit geçirmeyi çok seviyorum.Öğrenmeye meraklı, zorluklar
          karşısında asla vazgeçmeyen bir yazılımcı ve anneyim...
        </p>
      </div>
    </div>
  )
}

export default About
