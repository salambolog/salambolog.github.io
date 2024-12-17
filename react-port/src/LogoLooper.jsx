const images = [
    {src: './assets/images/logos/imeg.webp', alt: "imeg logo"},
    {src: './assets/images/logos/sharecare.png', alt: "sharecare logo"},
    {src: './assets/images/logos/cdc.png', alt: "cdc logo"},
    {src: './assets/images/logos/webmd.png', alt: "webmd logo"},
    {src: './assets/images/logos/capgemini.svg', alt: "capgemini logo"},
    {src: './assets/images/logos/sagepath.svg', alt: "sagepath logo"},
    {src: './assets/images/logos/nba.png', alt: "turner logo"},
]

function LogoLooper() {
    return (
        <div>
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    style={{ width: '100px', height: '100px', margin: '10px' }}
                />
            ))}
        </div>
    );
}

export default LogoLooper