import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";

function RichText({post, setPost}) {
    
    return (
        <div className='editor'>
            <CKEditor
                editor={ClassicEditor}
                data={post}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setPost(data);
                    }
                }
            />
        </div>

    )
    
  }
  
  export default RichText;