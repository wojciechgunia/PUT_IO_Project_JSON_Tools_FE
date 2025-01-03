import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  ViewChild,
  AfterViewChecked,
  Output,
  EventEmitter,
} from '@angular/core';
import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import * as CodeMirror from 'codemirror';

@Component({
  selector: 'app-jsoncodemirror',
  templateUrl: './jsoncodemirror.component.html',
  styleUrls: ['./jsoncodemirror.component.scss'],
})
export class JsonCodemirrorComponent
  implements OnInit, OnChanges, AfterViewChecked
{
  @Input() JSONContent = '';
  @Input() JSONLinesDif: number[] = [];
  @Input() JSONLinesAdd: number[] = [];
  @Input() JSONEdit = false;
  @Output() JSONContentOut: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild(CodemirrorComponent, { static: false })
  codemirrorComponent!: CodemirrorComponent;

  editorOptions: CodeMirror.EditorConfiguration = {
    mode: 'application/json',
    lineNumbers: true,
    readOnly: false,
    theme: 'default',
  };

  ngOnInit(): void {
    this.updateEditorOptions();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['JSONEdit']) {
      this.updateEditorOptions();
    }
    if (changes['JSONContent']) {
      this.updateContent();
    }
    if (changes['JSONLinesDif']) {
      this.highlightLines();
    }
    if (changes['JSONLinesAdd']) {
      this.highlightLines();
    }
  }

  ngAfterViewChecked() {
    this.highlightLines();
    this.autoResize();
  }

  private updateEditorOptions(): void {
    this.editorOptions = {
      ...this.editorOptions,
      readOnly: this.JSONEdit ? false : 'nocursor',
    };
  }

  private updateContent(): void {
    const editor = this.codemirrorComponent?.codeMirror;
    if (editor) {
      editor.setValue(this.JSONContent);
    }
    this.autoResize();
  }

  private highlightLines(): void {
    const editor = this.codemirrorComponent?.codeMirror;
    if (!editor) return;

    editor.operation(() => {
      editor.eachLine((line) => {
        editor.removeLineClass(line, 'background', 'highlight-orange');
        editor.removeLineClass(line, 'background', 'highlight-yellow');
      });

      this.JSONLinesAdd.forEach((lineNumber) => {
        const lineHandle = editor.getLineHandle(lineNumber - 1);
        if (lineHandle) {
          editor.addLineClass(lineHandle, 'background', 'highlight-yellow');
        }
      });

      this.JSONLinesDif.forEach((lineNumber) => {
        const lineHandle = editor.getLineHandle(lineNumber - 1);
        if (lineHandle) {
          editor.addLineClass(lineHandle, 'background', 'highlight-orange');
        }
      });
    });
  }

  autoResize(): void {
    const cm = this.codemirrorComponent.codeMirror;
    const doc = cm!.getDoc();
    const lines = doc.lineCount();
    let height;
    if (lines < 12) height = 12 * 20.5;
    else if (lines > 36) height = 36 * 20.5;
    else height = (lines + 1) * 20.5;
    cm!.setSize(null, height);
  }

  onContentChange(content: string): void {
    this.JSONContent = content;
    this.autoResize();
    this.JSONContentOut.emit(content);
  }

  copyCode() {
    navigator.clipboard
      .writeText(this.JSONContent)
      .then(() => {
        alert('Code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy code: ', err);
      });
  }
}
