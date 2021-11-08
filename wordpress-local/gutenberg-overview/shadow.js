block	
"textdomain": "guten-plugin"

css
"editorScript": "file:./build/index.js",
	"editorStyle": "file:./build/index.css",
	"style": "file:./build/style-index.css"
}

save 
<div {...useBlockProps.save()}>
			{__(
				'***Gutenberg Overview – hello from the saved content!',
				'gutenberg-overview'
			)}
            <div className="frontend__container">
                 {/*image*/}
                <p>Paragraph from saved content: {firstName}</p>
                <p>{position}</p>
                <p>{xing}</p>

                {/*modal-popup:
                { isSelected &&
                ( <div onClick={}>{
                <p>{firstName}</p>
                <p>{description}</p>
                socilalinks ....         
                }</div> )
                    }
                */}
            </div>
		</div>
