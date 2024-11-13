const SectionHeader: React.FC <{title:string}> = (props) => {
  return (
    <div className="text-2xl font-bold text-cyan-500 mb-4 mt-4 justify-self-center">
        <h2>{props.title}</h2>
    </div>
  )
}

export default SectionHeader;