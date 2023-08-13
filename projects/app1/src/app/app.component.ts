import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app1';

  @ViewChild('placeHolder', { read: ViewContainerRef })

  viewContainer!: ViewContainerRef;

  // 初始時就load app2 的頁面
  ngOnInit(): void {
      this.load();
  }

  // 異步載入 
  async load(): Promise<void> {

    const m = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      exposedModule: './Component'
    });
    
    this.viewContainer.createComponent(m.App2Component);
  }

}
