interface PropsTestimonials {
  texto: string;
  nome: string;
  cargo: string;
  foto: string;
}
const CardsTestimonials = ({ texto, nome, cargo, foto }: PropsTestimonials) => {
  return (
    <div className="flex flex-col items-start gap-5 rounded-3xl border border-blue-900 shadow-cardServices px-10 pt-10">
      <blockquote className="text-start">{texto}</blockquote>
      <div className="flex justify-between w-full h-24 items-center border-t border-blue-900">
        <div className="flex flex-col text-start">
          <cite>{nome}</cite>
          <span>{cargo}</span>
        </div>
        <img
          className="size-14 rounded-xl"
          src={foto}
          alt={`Foto de ${nome}`}
        />
      </div>
    </div>
  );
};

export default CardsTestimonials;
