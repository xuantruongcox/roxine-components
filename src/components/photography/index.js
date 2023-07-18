/** @jsxImportSource theme-ui */
import { Link } from "theme-ui";

const Photography = ({ restProps, src }) => {
    return <div sx={{variant: 'photography'}} {...restProps} style={{backgroundImage: `url(${src})`}}>
        <Link sx={{variant: 'photography.link'}} href="/">
            <i className="icon-heart"></i>
        </Link>
        <Link sx={{variant: 'photography.link'}} href="/">
            <i className="icon-link"></i>
        </Link>
    </div>
}

export default Photography;